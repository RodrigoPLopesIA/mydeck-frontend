import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Card {
  id: number;
  name: string;
  type: string;
  attribute: string;
  attack: number;
  defense: number;
  imageUrl: string;
  description?: string;
  monsterType?: string;
  monsterSubTypes?: string[];
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit {

  searchTerm: string = '';
  cards: Card[] = [];
  filteredCards: Card[] = [];
  paginatedCards: Card[] = [];

  selectedType: string = 'All';
  selectedCard: Card | null = null;

  // 🔥 Paginação
  currentPage: number = 1;
  itemsPerPage: number = 12;
  totalPages: number = 1;


  isCreating: boolean = false;

  monsterSubTypesInput: string = '';

  newCard: any = {
    name: '',
    type: 'Monster',
    attribute: '',
    attack: 0,
    defense: 0,
    imageUrl: '',
    description: '',
    monsterType: '',
    monsterSubTypes: []
  };
  ngOnInit(): void {
    this.cards = [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ];

    this.applyFilters();
  }

  // 🔎 Filtro geral (tipo + nome)
  applyFilters() {
    let filtered = this.cards;

    // Filtro por tipo
    if (this.selectedType !== 'All') {
      filtered = filtered.filter(card => card.type === this.selectedType);
    }

    // Filtro por nome
    if (this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(card =>
        card.name.toLowerCase().includes(term)
      );
    }

    this.filteredCards = filtered;

    this.currentPage = 1;
    this.updatePagination();
  }

  // 🔥 Atualiza paginação
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredCards.length / this.itemsPerPage) || 1;

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedCards = this.filteredCards.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // 🎛 Chamados pelo HTML
  filterByType(type: string) {
    this.selectedType = type;
    this.applyFilters();
  }

  filterByName() {
    this.applyFilters();
  }

  openDetails(card: Card) {
    this.selectedCard = card;
  }

  closeDetails() {
    this.selectedCard = null;
  }

  openCreateModal() {
    this.isCreating = true;
  }

  closeCreateModal() {
    this.isCreating = false;
    this.resetNewCard();
  }

  createCard() {
    const newId = this.cards.length
      ? Math.max(...this.cards.map(c => c.id)) + 1
      : 1;

    if (this.newCard.type === 'Monster') {
      this.newCard.monsterSubTypes = this.monsterSubTypesInput
        .split(',')
        .map(s => s.trim())
        .filter(s => s !== '');
    } else {
      this.newCard.attack = 0;
      this.newCard.defense = 0;
      this.newCard.monsterType = undefined;
      this.newCard.monsterSubTypes = undefined;
    }

    this.cards.push({
      id: newId,
      ...this.newCard
    });

    this.applyFilters();
    this.closeCreateModal();
  }

  resetNewCard() {
    this.newCard = {
      name: '',
      type: 'Monster',
      attribute: '',
      attack: 0,
      defense: 0,
      imageUrl: '',
      description: '',
      monsterType: '',
      monsterSubTypes: []
    };

    this.monsterSubTypesInput = '';
  }
}
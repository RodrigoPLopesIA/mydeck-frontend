import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card as CardComponent } from '../../components/card/card';
import { CardService } from '../../services/card-service';

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
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit {
  isEditing = false;
  cardToDelete: any = null;

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

  constructor(private cardService: CardService) { }
  ngOnInit(): void {
    this.getCards();

    this.applyFilters();
  }


  getCards() {
    this.cards = this.cardService.getCards();
    this.filteredCards = [...this.cards];
    this.updatePagination();
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


  saveCard() {
    const cardToSave = {
      ...this.newCard,
      monsterSubTypes: this.monsterSubTypesInput
        ? this.monsterSubTypesInput.split(',').map(s => s.trim())
        : []
    };

    if (this.isEditing) {
      this.cardService.updateCard(cardToSave);
    } else {
      this.cardService.createCard(cardToSave);
    }

    this.getCards();
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

  editCard(card: any) {
    this.isEditing = true;
    this.isCreating = true;
    this.selectedCard = null;

    this.newCard = { ...card };
    this.monsterSubTypesInput = card.subTypes?.join(', ') || '';
  }

  confirmDelete(card: any) {
    this.selectedCard = null;
    this.cardToDelete = card;
  }

  deleteCard() {
    this.cardService.deleteCard(this.cardToDelete.id);
    this.getCards();
    this.cardToDelete = null;
  }


  closeCreateModal() {
    this.isCreating = false;
    this.isEditing = false;

    this.newCard = {
      name: '',
      type: 'Monster',
      attribute: '',
      monsterType: '',
      subTypes: [],
      attack: 0,
      defense: 0,
      imageUrl: '',
      description: ''
    };

    this.monsterSubTypesInput = '';
  }
}
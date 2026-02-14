import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decks',
  templateUrl: './mydecks.html',
  imports: [CommonModule, FormsModule]
})
export class Mydecks {

  constructor(private router: Router) { }

  decks = [
    { id: 1, name: 'Dark Magician Control', description: 'Controle e magia negra.', cards: 40, updatedAt: new Date() },
    { id: 2, name: 'Blue-Eyes Chaos', description: 'Ataque explosivo.', cards: 42, updatedAt: new Date() },
    { id: 3, name: 'Cyber Dragon OTK', description: 'Finalização rápida.', cards: 40, updatedAt: new Date() },
    { id: 4, name: 'Branded Despia', description: 'Fusão estratégica.', cards: 45, updatedAt: new Date() },
    { id: 5, name: 'Tearlaments Meta', description: 'Deck competitivo.', cards: 40, updatedAt: new Date() },
    { id: 6, name: 'Kashtira Lock', description: 'Controle de campo.', cards: 44, updatedAt: new Date() },
    { id: 7, name: 'Exodia FTK', description: 'Vitória instantânea.', cards: 40, updatedAt: new Date() },
    { id: 8, name: 'Red Dragon Archfiend', description: 'Sincronia agressiva.', cards: 41, updatedAt: new Date() },
    { id: 9, name: 'Sky Striker', description: 'Controle tático.', cards: 40, updatedAt: new Date() },
    { id: 10, name: 'Salamangreat', description: 'Recursos infinitos.', cards: 40, updatedAt: new Date() },
  ];
  filteredDecks: any[] = [];

  isCreating = false;
  isEditing = false;
  isDeleteConfirmOpen = false;

  formDeck: any = this.getEmptyDeck();
  deckToDelete: any = null;

  searchTerm = '';
  selectedSize = 'all';

  currentPage = 1;
  pageSize = 6;

  getEmptyDeck() {
    return {
      id: Date.now(),
      name: '',
      description: '',
      cards: 40,
      updatedAt: new Date()
    };
  }

  ngOnInit() {
    this.filteredDecks = this.decks;
  }

  // ======================
  // CREATE
  // ======================

  openCreateModal() {
    this.formDeck = this.getEmptyDeck();
    this.isCreating = true;
  }

  createDeck() {
    this.decks.push({ ...this.formDeck });
    this.filterDecks();
    this.isCreating = false;
  }

  // ======================
  // EDIT
  // ======================

  openEditModal(deck: any) {
    this.formDeck = { ...deck };
    this.isEditing = true;
  }

  updateDeck() {
    const index = this.decks.findIndex(d => d.id === this.formDeck.id);

    if (index !== -1) {
      this.decks[index] = {
        ...this.formDeck,
        updatedAt: new Date()
      };
    }

    this.filterDecks();
    this.isEditing = false;
  }

  // ======================
  // DELETE
  // ======================

  openDeleteModal(deck: any) {
    this.deckToDelete = deck;
    this.isDeleteConfirmOpen = true;
  }

  confirmDelete() {
    this.decks = this.decks.filter(d => d.id !== this.deckToDelete.id);
    this.filterDecks();
    this.isDeleteConfirmOpen = false;
  }

  // ======================
  // NAVIGATE TO CARDS
  // ======================

  goToDeckDetails(deck: any) {
    this.router.navigate(['/deck-details', deck.id]);
  }

  // ======================
  // FILTER
  // ======================

  filterDecks() {
    this.filteredDecks = this.decks.filter(deck => {

      const matchesName =
        deck.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesSize =
        this.selectedSize === 'all' ||
        (this.selectedSize === '40' && deck.cards === 40) ||
        (this.selectedSize === '41+' && deck.cards > 40);

      return matchesName && matchesSize;
    });

    this.currentPage = 1;
  }

  get totalPages() {
    return Math.ceil(this.filteredDecks.length / this.pageSize);
  }

  get paginatedDecks() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredDecks.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}
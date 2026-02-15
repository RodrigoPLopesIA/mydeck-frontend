import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DeckService } from '../../services/decks/deck-service';

@Component({
  selector: 'app-decks',
  templateUrl: './mydecks.html',
  imports: [CommonModule, FormsModule]
})
export class Mydecks {

  constructor(private router: Router, private deckService: DeckService) { }

  decks: any[] = []; 
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

  

  ngOnInit() {
    this.getDecks()
    this.filteredDecks = this.decks;
  }

  getDecks(){
    this.decks = this.deckService.getDecks();
  }
  // ======================
  // CREATE
  // ======================
  getEmptyDeck() {
    return {
      id: Date.now(),
      name: '',
      description: '',
      cards: 40,
      updatedAt: new Date()
    };
  }

  openCreateModal() {
    this.formDeck = this.getEmptyDeck();
    this.isCreating = true;
  }

  createDeck() {
    this.deckService.createDeck(this.formDeck);
    this.getDecks();
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
    this.deckService.updateDeck(this.formDeck);
    this.getDecks();
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
    this.deckService.deleteDeck(this.deckToDelete.id);
    this.getDecks();
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

  getTotalCardsInDeck(deckId: number): number {
    return this.deckService.getTotalCardsInDeck(deckId);
  }
}
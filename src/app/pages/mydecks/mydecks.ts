import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-mydecks',
  imports: [DatePipe, CommonModule, FormsModule, RouterLink],
  templateUrl: './mydecks.html'
})
export class Mydecks {
  searchTerm = '';
  selectedSize = 'all';

  currentPage = 1;
  itemsPerPage = 6;

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

  newDeck: any = {
    name: '',
    description: '',
    cards: 40
  };
  isCreating = false;

  get filteredDecks() {
    return this.decks
      .filter(deck =>
        deck.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .filter(deck => {
        if (this.selectedSize === 'all') return true;
        if (this.selectedSize === '40') return deck.cards === 40;
        if (this.selectedSize === '41+') return deck.cards > 40;
        return true;
      });
  }

  get totalPages() {
    return Math.ceil(this.filteredDecks.length / this.itemsPerPage);
  }

  get paginatedDecks() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredDecks.slice(start, start + this.itemsPerPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  openCreateModal() {
    this.isCreating = true;
  }

  closeCreateModal() {
    this.isCreating = false;
    this.resetNewDeck();
  }

  createDeck() {
    const newId = this.decks.length
      ? Math.max(...this.decks.map(d => d.id)) + 1
      : 1;

    this.decks.push({
      id: newId,
      name: this.newDeck.name,
      description: this.newDeck.description,
      cards: this.newDeck.cards,
      updatedAt: new Date()
    });

    this.currentPage = 1;
    this.closeCreateModal();
  }

  resetNewDeck() {
    this.newDeck = {
      name: '',
      description: '',
      cards: 40
    };
  }

}

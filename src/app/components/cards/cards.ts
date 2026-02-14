import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Card {
  id: number;
  name: string;
  type: string;
  attribute: string;
  attack: number;
  defense: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  cards: Card[] = [];

  ngOnInit(): void {
    // Mock de dados
    this.cards = [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg'
      }
    ];
  }
}

import { Component, Input } from '@angular/core';

interface ICard {
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
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input({
    required: true
  }) card: ICard = {
    id: 0,
    name: '',
    type: '',
    attribute: '',
    attack: 0,
    defense: 0,
    imageUrl: '',
  };
}

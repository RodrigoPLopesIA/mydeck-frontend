import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deckdetails',
  imports: [],
  templateUrl: './deckdetails.html'
})
export class Deckdetails {
deckId!: string;

  deck = {
    name: 'Dark Magician Supreme',
    description: 'Deck focado em controle e invocação especial.',
    cards: [
      { name: 'Dark Magician', type: 'Monster' },
      { name: 'Magician’s Rod', type: 'Monster' },
      { name: 'Dark Magical Circle', type: 'Spell' },
      { name: 'Eternal Soul', type: 'Trap' }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.deckId = this.route.snapshot.paramMap.get('id')!;
    console.log('Deck ID:', this.deckId);
  }
}

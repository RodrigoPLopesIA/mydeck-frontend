import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-deck',
  imports: [FormsModule, RouterModule],
  templateUrl: './create-deck.html',
  styleUrl: './create-deck.css',
})
export class CreateDeck {
  deck = {
    name: '',
    description: ''
  };

  constructor(private router: Router) { }

  createDeck() {
    console.log('Deck criado:', this.deck);

    // Aqui depois você chama sua API
    // this.deckService.create(this.deck).subscribe(...)

    // Simulação de redirecionamento
    this.router.navigate(['/decks']);
  }
}

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
    description: '',
    image: null as File | null
  };

  imagePreview: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.deck.image = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  createDeck() {
    const formData = new FormData();
    formData.append('name', this.deck.name);
    formData.append('description', this.deck.description);

    if (this.deck.image) {
      formData.append('image', this.deck.image);
    }

    // Enviar para API
    console.log('Deck criado:', formData);

    // Exemplo:
    // this.deckService.create(formData).subscribe(...)
  }
}

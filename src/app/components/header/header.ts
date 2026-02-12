import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterModule],
  templateUrl: './header.html'
})
export class Header {
 search = ''

  onSearch() {
    console.log('Buscar carta:', this.search);
    // depois você pode integrar com API de cartas
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html'
})
export class Header {
 search = ''

  onSearch() {
    console.log('Buscar carta:', this.search);
    // depois você pode integrar com API de cartas
  }
}

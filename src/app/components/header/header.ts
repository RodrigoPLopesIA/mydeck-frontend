import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './header.html'
})
export class Header {
 mobileMenuOpen = false;


 toggleMobileMenu() {   
  this.mobileMenuOpen = !this.mobileMenuOpen;
  console.log('Mobile menu open:', this.mobileMenuOpen);
 }
}

import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { keycloak } from '../../services/auth/keycloak.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './header.html'
})
export class Header {
  mobileMenuOpen = false;
  dropdownOpen = signal(false);

  constructor(public auth: AuthService) { }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleDropdown() {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  login() {
    keycloak.login({
      redirectUri: window.location.origin
    });
  }

  register() {
    keycloak.register({
      redirectUri: window.location.origin
    });
  }

  profile(){
    keycloak.accountManagement();
  }

  logout() {
    keycloak.logout({
      redirectUri: window.location.origin
    });
  }
}

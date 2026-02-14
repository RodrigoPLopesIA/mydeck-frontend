import { Injectable, signal } from '@angular/core';
import { keycloak } from '../../services/auth/keycloak.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

    isAuthenticated = signal<boolean>(false);
    userProfile = signal<any>(null);

    async loadUser() {
        if (keycloak.authenticated) {
            const profile = await keycloak.loadUserProfile();
            this.userProfile.set(profile);
            this.isAuthenticated.set(true);
        } else {
            this.isAuthenticated.set(false);
            this.userProfile.set(null);
        }
    }

    login() {
        keycloak.login({
            redirectUri: window.location.href
        });
    }

    logout() {
        keycloak.logout({
            redirectUri: window.location.origin
        });
    }

    getToken() {
        return keycloak.token;
    }

    getUsername() {
        return keycloak.tokenParsed?.['preferred_username'];
    }

    getEmail() {
        return keycloak.tokenParsed?.['email'];
    }

    hasRole(role: string): boolean {
        return keycloak.hasRealmRole(role);
    }
}
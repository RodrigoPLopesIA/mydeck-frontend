import { CanActivateFn } from '@angular/router';
import { keycloak } from '../../services/auth/keycloak.service';


export const authGuard: CanActivateFn = async () => {
  if (!keycloak.authenticated) {
    await keycloak.login();
    return false;
  }

  return true;
};
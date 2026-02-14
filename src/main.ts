import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { keycloak } from './app/services/auth/keycloak.service';
import { AuthService } from './app/auth/services/auth.service';

async function startApp() {
  await keycloak.init({
    onLoad: 'check-sso',
    checkLoginIframe: false,
    pkceMethod: 'S256'
  });

  const appRef = await bootstrapApplication(App, appConfig);
  const authService = appRef.injector.get(AuthService);
  await authService.loadUser();
}

startApp().catch((err) => console.error(err));

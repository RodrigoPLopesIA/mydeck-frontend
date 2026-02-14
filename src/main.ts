import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { keycloak } from './app/services/auth/keycloak.service';

async function startApp() {
  await keycloak.init({
    onLoad: 'check-sso',
    checkLoginIframe: false,
    pkceMethod: 'S256'
  });

  await bootstrapApplication(App, appConfig);
}

startApp().catch((err) => console.error(err));

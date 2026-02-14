import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Mydecks } from './pages/mydecks/mydecks';
import { Deckdetails } from './pages/deckdetails/deckdetails';
import { Cards } from './pages/cards/cards';
import { authGuard } from './auth/guard/auth.guard';

export const routes: Routes =
     [
          { path: '', component: Home },
          { path: 'my-decks', component: Mydecks, canActivate: [authGuard], },
          { path: "deck-details/:id", component: Deckdetails, canActivate: [authGuard], },
          {
               path: 'my-cards',
               component: Cards,
               canActivate: [authGuard],
          },
          {
               path: 'profile',
               loadComponent: () => import('./pages/profile/profile').then(m => m.Profile),
               canActivate: [authGuard],
          },
          { path: "**", redirectTo: "" }
     ];

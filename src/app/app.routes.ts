import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Mydecks } from './pages/mydecks/mydecks';
import { Deckdetails } from './pages/deckdetails/deckdetails';
import { Cards } from './pages/cards/cards';

export const routes: Routes =
     [
          { path: '', component: Home },
          { path: 'my-decks', component: Mydecks },
          { path: "deck-details/:id", component: Deckdetails },
          {
               path: 'my-cards',
               component: Cards
          },
          { path: "**", redirectTo: "" }
     ];

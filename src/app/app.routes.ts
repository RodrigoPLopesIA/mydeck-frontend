import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Mydecks } from './components/mydecks/mydecks';
import { Deckdetails } from './components/deckdetails/deckdetails';

export const routes: Routes = 
[
     { path: '', component: Home },
     { path: 'my-decks', component: Mydecks },
     {path: "deck-details/:id", component: Deckdetails},
     {path: "**", redirectTo: ""}
];

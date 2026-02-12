import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Mydecks } from './components/mydecks/mydecks';

export const routes: Routes = 
[
     { path: '', component: Home },
     { path: 'my-decks', component: Mydecks },
     {path: "**", redirectTo: ""}
];

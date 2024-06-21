import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonsDetailComponent } from './pokemons-detail/pokemons-detail.component';

export const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'pokemon/:id', component: PokemonsDetailComponent},
];

import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonsDetailComponent } from './pokemons-detail/pokemons-detail.component';
import { PokemonCreateComponent } from './pokemon-create/pokemon-create.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'pokemon/:id', component: PokemonsDetailComponent},
  { path: 'pokemon-create', component: PokemonCreateComponent},
  { path: 'techStack', component: TechStackComponent},
  { path: 'resume', component: ResumeComponent},
];

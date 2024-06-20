import { Component } from '@angular/core';
import { Pokemons } from '../pokemons';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemons: Pokemons = {
    id: '3f9451b-2ac1-4497-be1c-b3b86facc9d3',
    name: 'Bulbasaur #1',
    type: 'Grass',
    weight: 10
  };
}

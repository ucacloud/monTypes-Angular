import { Component } from '@angular/core';
import { Pokemons } from '../pokemons';
import { FormsModule } from '@angular/forms';
import { POKEMONS } from '../mock-pokemon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemons: Pokemons = {
    id: '3f9451b-2ac1-4497-be1c-b3b86facc9d3',
    name: 'Bulbasaur',
    type: 'Grass',
    weight: 10
  };

  pokemon = POKEMONS;
}

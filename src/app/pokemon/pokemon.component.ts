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
  selectedPokemons: Pokemons = {} as Pokemons;

  pokemon = POKEMONS;

  select = (pokemons: Pokemons): void => {
    this.selectedPokemons = pokemons;
  }
}

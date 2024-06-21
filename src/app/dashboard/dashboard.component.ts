import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemons } from '../pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  pokemon: Pokemons[] = [];

  constructor(private pokemonService: PokemonsService) {}

  getTop5PokemonByWeight = (): void => {
    this.pokemonService.getPokemons().subscribe((pokemon) => {
      // TODO: Only return top 5 from API
      this.pokemon = pokemon.slice(0, 5);
    })
  }

  ngOnInit(): void {
    this.getTop5PokemonByWeight();
  }
}

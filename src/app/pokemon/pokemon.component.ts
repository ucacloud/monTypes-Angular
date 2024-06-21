import { Component } from '@angular/core';
import { Pokemons } from '../pokemons';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { PokemonsDetailComponent } from '../pokemons-detail/pokemons-detail.component';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, PokemonsDetailComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  selectedPokemons!: Pokemons;
  pokemon: Pokemons[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  getPokemon = (): void => {
    this.pokemonsService.getPokemons().subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
    }

  select = (pokemons: Pokemons): void => {
    this.selectedPokemons = pokemons;
  }

  ngOnInit(): void {
    console.log('Invoked ngOnInit')
    this.getPokemon();
  }
}

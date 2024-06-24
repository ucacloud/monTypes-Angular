import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemons } from '../pokemons';
import { PokemonsService } from '../pokemons.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  pokemon: Pokemons[] = [];

  selectedPokemons! : Pokemons;
  currentPagePokemon: Pokemons[] = [];
  currentPage = 0;
  pageSize = 12;
  pageCount = 0;

  constructor(private pokemonService: PokemonsService) {}

  selectPokemons = (pokemons: Pokemons) => {
    this.selectedPokemons = pokemons
    console.log(this.selectedPokemons)
  }

  getPokedex = (): void => {
    this.pokemonService.getPokemon().subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.pageCount = Math.ceil(this.pokemon.length / this.pageSize);
      this.currentPagePokemon = this.pokemon.slice(0, this.pageSize);
      console.log(`Pagecount = ${this.pageCount}`)
    })
  }

  previousPage = (): void => {
    if (this.currentPage -1 < 0) {
  return;
}
this.currentPage -= 1;
const startIndex = this.currentPage * this.pageSize;
this.currentPagePokemon = this.pokemon.slice(startIndex, startIndex + this.pageSize);
};

nextPage = (): void => {
    if (this.currentPage +1 >= this.pageCount) {
  return;
}
this.currentPage += 1;
const startIndex = this.currentPage * this.pageSize;
this.currentPagePokemon = this.pokemon.slice(startIndex, startIndex + this.pageSize);
};

  ngOnInit(): void {
    this.getPokedex();
  }
}

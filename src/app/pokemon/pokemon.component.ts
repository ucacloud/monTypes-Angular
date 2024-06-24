import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MessageService } from '../message.service';
import { Pokemons } from '../pokemons';
import { PokemonsService } from '../pokemons.service';
import { PokemonsDetailComponent } from '../pokemons-detail/pokemons-detail.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, PokemonsDetailComponent, RouterLink],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  pokemon: Pokemons[] = [];

  currentPagePokemon: Pokemons[] = [];
  currentPage = 0;
  pageSize = 16;
  pageCount = 0;

  constructor(
    private pokemonsService: PokemonsService,
    private messageService: MessageService
  ) {}

  getPokemon = (): void => {
    this.pokemonsService.getPokemon().subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.pageCount = Math.ceil(this.pokemon.length / this.pageSize);
      this.currentPagePokemon = this.pokemon.slice(0, this.pageSize);
      console.log(`Pagecount = ${this.pageCount}`)
    });
  };

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
  
  deletePokemons = (id: string): void => {
    this.pokemonsService.deletePokemons(id).subscribe((res) => {
      this.getPokemon();
    });
  }
  ngOnInit(): void {
    console.log('Invoked ngOnInit');
    this.getPokemon();
  }
}

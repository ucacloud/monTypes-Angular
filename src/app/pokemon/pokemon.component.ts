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
  selectedPokemons!: Pokemons;
  pokemon: Pokemons[] = [];

  constructor(
    private pokemonsService: PokemonsService,
    private messageService: MessageService
  ) {}

  getPokemon = (): void => {
    this.pokemonsService.getPokemon().subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  };

  select = (pokemons: Pokemons): void => {
    this.messageService.add(`Selected Pokemon ID : ${pokemons.id}`);
    this.selectedPokemons = pokemons;
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

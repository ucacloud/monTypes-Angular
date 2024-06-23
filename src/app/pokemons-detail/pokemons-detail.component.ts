import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pokemons } from '../pokemons';
import { FormsModule } from '@angular/forms';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemons-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './pokemons-detail.component.html',
  styleUrl: './pokemons-detail.component.css'
})
export class PokemonsDetailComponent {
  pokemons?: Pokemons;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService,
  ) {}

  getPokemons = (): void => {
    const pokemonsId = this.route.snapshot.paramMap.get('id');

    if (pokemonsId) {
      this.pokemonsService.getPokemons(pokemonsId)
      .subscribe((pokemons: Pokemons) => {
        this.pokemons = pokemons;
    }); 
    }
  }

  updatePokemons = (): void => {
    const pokemonsId = this.route.snapshot.paramMap.get('id');

    if (pokemonsId && this.pokemons) {
      this.pokemonsService.updatePokemons(pokemonsId, this.pokemons)
      .subscribe((pokemons: Pokemons) => {
        this.pokemons = pokemons;
    }); 
  }
}

  ngOnInit(): void {
    this.getPokemons();
  }
}

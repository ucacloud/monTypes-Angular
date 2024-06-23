import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { Pokemons } from '../pokemons';

@Component({
  selector: 'app-pokemon-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pokemon-create.component.html',
  styleUrl: './pokemon-create.component.css'
})
export class PokemonCreateComponent {
  pokemons = {} as Pokemons;
  constructor(private pokemonsService: PokemonsService,
    private router: Router) {}

  createPokemons = (): void => {
    this.pokemonsService.createPokemons(this.pokemons)
      .subscribe((res) => {
        this.router.navigate(['/pokemon'])
      });
  }
}

import { Injectable } from '@angular/core';
import { Pokemons } from './pokemons';
import { POKEMONS } from './mock-pokemon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor() { }

  getPokemons(): Observable<Pokemons[]> {
    const pokemon = of(POKEMONS);
    return pokemon;
  }


}

import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { POKEMONS } from './mock-pokemon';
import { Pokemons } from './pokemons';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private messageService: MessageService) { }

  getPokemon = (): Observable<Pokemons[]> => {
    this.messageService.add('About to fetch data from the API');
    const pokemon = of(POKEMONS);
    this.messageService.add('Done fetching data from API');
    return pokemon;
  }

  getPokemons = (id: string): Observable<Pokemons> => {
    const pokemons = POKEMONS.find(pokemons => pokemons.id === id);

    this.messageService.add(`Fetched data for ID ${id} from API`)

    if (pokemons) {
      return of(pokemons);
    }

    return of({} as Pokemons);
  }
}

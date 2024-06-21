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

  getPokemons(): Observable<Pokemons[]> {
    this.messageService.add('About to fetch data from the API');
    const pokemon = of(POKEMONS);
    this.messageService.add('Done fetching data from API');
    return pokemon;
  }


}

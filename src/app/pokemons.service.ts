import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { POKEMONS } from './mock-pokemon';
import { Pokemons } from './pokemons';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemonUrl = 'http://localhost:3000/api/v1/pokemon';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  getPokemon = (): Observable<Pokemons[]> => {
    this.messageService.add('About to fetch data from the API');
    
    return this.http.get<Pokemons[]>(this.pokemonUrl);
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

import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { POKEMONS } from './mock-pokemon';
import { Pokemons } from './pokemons';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemonUrl = '/api/v1/pokemon';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  getPokemon = (): Observable<Pokemons[]> => {
    this.messageService.add('About to fetch data from the API');
    
    return this.http.get<Pokemons[]>(this.pokemonUrl);
  }

  getPokemons = (id: string): Observable<Pokemons> => {
   this.messageService.add(`Fetched data for ID ${id} from API`)
    return this.http.get<Pokemons>(`${this.pokemonUrl}/${id}`);
  }

  deletePokemons = (id: string): Observable<boolean> => {
    
    this.http.delete(`${this.pokemonUrl}/${id}`);

    return of(true);
  }

  updatePokemons = (id: string, pokemons: Pokemons): Observable<Pokemons> => {
    
   return this.http.put<Pokemons>(`${this.pokemonUrl}/${id}`, pokemons);
  }

  createPokemons = (pokemons: Pokemons): Observable<Pokemons> => {
    
  return this.http.post<Pokemons>(`${this.pokemonUrl}`, pokemons);
  }
}

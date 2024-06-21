import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Pokemons } from '../pokemons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemons-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './pokemons-detail.component.html',
  styleUrl: './pokemons-detail.component.css'
})
export class PokemonsDetailComponent {
  @Input() pokemons?: Pokemons;

}

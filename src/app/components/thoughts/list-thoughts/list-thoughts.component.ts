import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToughtsComponent } from '../toughts/toughts.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [
    RouterLink,
    ToughtsComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})

export class ListThoughtsComponent {
  protected listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes angular',
      autor: 'Isaquesantos7',
      modelo: 'modelo3'
    },

    {
      conteudo: 'I love angular',
      autor: 'Isaquesantos7',
      modelo: 'modelo1'
    },

    {
      conteudo: 'Passo informações para o componente filho',
      autor: 'Componente pai',
      modelo: 'modelo1'
    },

    
    {
      conteudo: 'CrackStation uses massive pre-computed lookup tables to crack password hashes. These tables store a mapping between the hash of a password, and the correct password for that hash. The hash values are indexed so that it is possible to quickly search the database for a given hash. If the hash is present in the database, the password can be recovered in a fraction of a second. This only works for "unsalted" hashes. For information on password hashing systems that are not vulnerable to pre-computed lookup tables, see our hashing security page.',
      autor: 'Componente pai',
      modelo: 'modelo1'
    },
  ]
}

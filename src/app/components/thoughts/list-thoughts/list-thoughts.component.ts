import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToughtsComponent } from '../toughts/toughts.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [
    RouterLink,
    ToughtsComponent,
    NgFor
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
  ]
}

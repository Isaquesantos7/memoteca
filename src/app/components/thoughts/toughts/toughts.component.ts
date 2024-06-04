import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Thought } from '../../../Thought';

@Component({
  selector: 'app-toughts',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toughts.component.html',
  styleUrl: './toughts.component.css'
})

export class ToughtsComponent {
  @Input() pensamento: Thought = {
    id: 0,
    conteudo: 'I love angular',
    autor: 'Isaquesantos7',
    modelo: 'modelo3'
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >=256) {
      return 'pensamento-g';
    } 

    return 'pensamento-p';
  }
}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toughts',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toughts.component.html',
  styleUrl: './toughts.component.css'
})

export class ToughtsComponent {
  @Input() pensamento = {
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

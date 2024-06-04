import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Thought } from '../../../Thought';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toughts',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './toughts.component.html',
  styleUrl: './toughts.component.css'
})

export class ToughtsComponent {
  @Input() pensamento: Thought = {
    id: 0,
    conteudo: '',
    autor: '',
    modelo: ''
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >=256) {
      return 'pensamento-g';
    } 

    return 'pensamento-p';
  }
}

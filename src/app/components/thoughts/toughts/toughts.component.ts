import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toughts',
  standalone: true,
  imports: [],
  templateUrl: './toughts.component.html',
  styleUrl: './toughts.component.css'
})

export class ToughtsComponent {
  @Input() pensamento = {
    conteudo: 'I love angular',
    autor: 'Isaquesantos7',
    modelo: 'modelo3'
  }
}

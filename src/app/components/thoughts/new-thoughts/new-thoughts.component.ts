import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-thoughts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-thoughts.component.html',
  styleUrl: './new-thoughts.component.css'
})

export class NewThoughtsComponent {
  protected pensamento = {
    id: '1',
    conteudo: 'Pense que hoje eu pensei muito!',
    autor: 'Isaquesantos7',
    modelo: 'modelo-1'
  }

  salvar() {
    alert("Dados Salvo!");
  }

  cancelar() {
    alert("Envio cancelado!");
  }
}

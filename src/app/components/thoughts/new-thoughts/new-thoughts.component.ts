import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Thought } from '../../../Thought';

import { ThoughtService } from '../../../services/thought.service';

@Component({
  selector: 'app-new-thoughts',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './new-thoughts.component.html',
  styleUrl: './new-thoughts.component.css'
})

export class NewThoughtsComponent {
  protected pensamento: Thought = {
    conteudo: '',
    autor: '',
    modelo: ''
  }

  constructor (
    private thought: ThoughtService,
    private router: Router
  ) {}

  salvar() {
    this.thought.saveThought(this.pensamento).subscribe(() => {
      this.router.navigate(['list-thought']);
    });    
  }

  cancelar() {
    this.router.navigate(['list-thought']);
  }
}

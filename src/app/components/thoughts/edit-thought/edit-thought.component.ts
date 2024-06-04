import { Component, OnInit } from '@angular/core';
import { Thought } from '../../../Thought';
import { ThoughtService } from '../../../services/thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent implements OnInit{

  protected pensamento: Thought = {
    id: 0,
    conteudo: '',
    autor: '',
    modelo: ''
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.routes.snapshot.paramMap.get('id'));

    this.thoughtService.findById(id).subscribe((thougth) => {
      this.pensamento = thougth;
    })
  }

  editThought() {
    this.thoughtService.editTought(this.pensamento).subscribe((thought) => {
      this.router.navigate(['list-thought']);
    });
  }

  cancelar() {
    this.router.navigate(['list-thought']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../../services/thought.service';
import { Thought } from '../../../Thought';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-remove-thought',
  standalone: true,
  imports: [],
  templateUrl: './remove-thought.component.html',
  styleUrl: './remove-thought.component.css'
})

export class RemoveThoughtComponent implements OnInit {

  protected thought: Thought = {
    id: 0,
    conteudo: '',
    autor: '',
    modelo: ''
  }

  constructor(
    private toughtService: ThoughtService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: number = Number(this.routes.snapshot.paramMap.get('id'));

    this.toughtService.findById(id).subscribe((thought) => {
      this.thought = thought;
    });
  }

  removeThought() {
    if (this.thought.id) {
      this.toughtService.removeTought(this.thought.id!).subscribe(() => {
        this.router.navigate(['list-thought']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['list-thought']);
  }

}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToughtsComponent } from '../toughts/toughts.component';
import { NgFor, NgIf } from '@angular/common';
import { Thought } from '../../../Thought';
import { ThoughtService } from '../../../services/thought.service';

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

export class ListThoughtsComponent implements OnInit{
  protected listaPensamentos: Thought[] = []

  constructor(private thoughtService: ThoughtService) {
  }

  ngOnInit(): void {
    this.listaPensamento();      
  }

  listaPensamento() {
    return this.thoughtService.getAllThought().subscribe((item) => this.listaPensamentos = item);
  }
}

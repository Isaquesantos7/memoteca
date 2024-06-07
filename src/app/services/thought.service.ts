import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from '../Thought';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private url = 'http://localhost:8080/api/pensamentos';

  constructor(private http: HttpClient) { }

  getAllThought() : Observable<Thought[]> {
    
    return this.http.get<Thought[]>(this.url);
  }

  saveThought(thought: Thought): Observable<Thought> {

    return this.http.post<Thought>(this.url, thought);
  }

  removeTought(id: number): Observable<Thought> {
    const url: string = `${this.url}/${id}`;

    return this.http.delete<Thought>(url);
  }

  editTought(thought: Thought): Observable<Thought> {
    const url: string = `${this.url}/${thought.id}`;

    return this.http.put<Thought>(url, thought);
  }

  findById(id: number): Observable<Thought> {
    const url: string = `${this.url}/${id}`;

    return this.http.get<Thought>(url);
  }
}

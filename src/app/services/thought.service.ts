import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from '../Thought';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private url = 'http://localhost:3000/pensamentos';

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

  findById(id: number): Observable<Thought> {
    const url: string = `${this.url}/${id}`;

    return this.http.get<Thought>(url);
  }
}

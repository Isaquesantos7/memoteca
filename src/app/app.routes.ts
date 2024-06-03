import { Routes } from '@angular/router';
import { NewThoughtsComponent } from './components/thoughts/new-thoughts/new-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

export const routes: Routes = [
    {path: '', redirectTo: 'list-thought', pathMatch: 'full'},
    {path: 'new-thought', component: NewThoughtsComponent},
    {path: 'list-thought', component: ListThoughtsComponent},
];

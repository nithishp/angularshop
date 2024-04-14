import { Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { AddmembersComponent } from '../addmembers/addmembers.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
    { path: 'view', component: ContentComponent },
  { path: 'add', component: AddmembersComponent },
];

import { Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { AddmembersComponent } from '../addmembers/addmembers.component';

export const routes: Routes = [
    { path: 'view', component: ContentComponent },
  { path: 'add', component: AddmembersComponent },
  { path: '', component: ContentComponent }, 
];

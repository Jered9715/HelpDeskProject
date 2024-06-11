import { Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';


export const appRoutes: Routes = [
  { path: '', component: TicketListComponent },
  { path: 'ticket/:id', component: TicketDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
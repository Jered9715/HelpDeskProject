import { Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { BookmarksListComponent } from './components/bookmarks-list/bookmarks-list.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/ticket', pathMatch: 'full' },
  { path: 'ticket', component: TicketListComponent},
  { path: 'ticket/:id', component: TicketDetailComponent },
  {path: 'bookmarks', component: BookmarksListComponent}
];
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { BookmarkService } from '../../services/bookmarks.service';
import { ticket } from '../../interfaces/ticket';
import { bookmark } from '../../interfaces/bookmark';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class TicketListComponent implements OnInit {
  tickets: ticket[] = [];
  newTicket: ticket = {
    ticketId: 0,
    subject: '',
    details: '',
    resolution: '',
    ticketStatus: false,
    clientId: '',
    techId: ''
  };

  constructor(private ticketService: TicketsService, private bookmarkService: BookmarkService, private router: Router) { }

  ngOnInit(): void {
    this.fetchTickets();
  }

  fetchTickets(): void {
    this.ticketService.getTickets().subscribe((data: ticket[]) => {
      this.tickets = data;
    });
  }

  addTicket(): void {
    if (this.newTicket.subject && this.newTicket.details) {
      this.ticketService.addTicket(this.newTicket).subscribe((ticket: ticket) => {
        this.tickets.push(ticket);
        this.newTicket = {
          ticketId: 0,
          subject: '',
          details: '',
          resolution: '',
          ticketStatus: false,
          clientId: '',
          techId: ''
        };
      });
    }
  }

  bookmarkTicket(ticket: ticket): void {
    const bookmark: bookmark = { userId: 'staticUserId', ticketId: ticket.ticketId };
    this.bookmarkService.addBookmark(bookmark).subscribe(() => {
      ticket.bookmarked = true;
    });
  }

  navigateToDetails(ticket: ticket): void {
    this.router.navigate(['/ticket', ticket.ticketId]);
  }

  deleteTicket(ticketId: number): void {
    this.ticketService.deleteTicket(ticketId).subscribe(() => {
      this.tickets = this.tickets.filter(ticket => ticket.ticketId !== ticketId);
    });
  }
}
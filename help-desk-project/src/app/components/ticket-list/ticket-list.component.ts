import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { BookmarksService } from '../../services/bookmarks.service';
import { ticket } from '../../interfaces/ticket';
import { bookmark } from '../../interfaces/bookmark';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: ticket[] = [];
  newTicket: ticket = {
    TicketId: 0,
    Subject: '',
    Details: '',
    Resolution: '',
    TicketStatus: false,
  };

  constructor(public router: Router, private ticketService: TicketsService, private bookmarkService: BookmarksService) {}

  ngOnInit(): void {
    this.fetchTickets();
  }

  fetchTickets(): void {
    this.ticketService.getTickets().subscribe((data: ticket[]) => {
      this.tickets = data;
      console.log(data);
    });
  }

  addTicket(): void {
    if (this.newTicket.Subject && this.newTicket.Details) {
      this.ticketService.addTicket(this.newTicket).subscribe((ticket: ticket) => {
        this.tickets.push(ticket);
        this.newTicket = {
          TicketId: 0,
          Subject: '',
          Details: '',
          Resolution: '',
          TicketStatus: false,
        };
      });
    }
  }

  bookmarkTicket(ticket: ticket): void {
    const bookmark: bookmark = { UserId: 'UserId', TicketId: ticket.TicketId };
    this.bookmarkService.addBookmark(bookmark).subscribe(() => {
      ticket.Bookmarked = true;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../../services/tickets.service';
import { ticket } from '../../interfaces/ticket';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket: ticket | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketsService
  ) {}

  ngOnInit(): void {
    const ticketId = +this.route.snapshot.paramMap.get('id')!;
    this.getTicketDetails(ticketId);
  }

  getTicketDetails(ticketId: number): void {
    this.ticketService.getTicket(ticketId).subscribe((ticket: ticket) => {
      this.ticket = ticket;
    });
  }

  updateTicket(): void {
    if (this.ticket) {
      this.ticketService.updateTicket(this.ticket).subscribe(() => {
        alert('Ticket updated successfully');
      });
    }
  }

  resolveTicket(): void {
    if (this.ticket) {
      this.ticket.ticketStatus = true;
      this.updateTicket();
    }
  }
}

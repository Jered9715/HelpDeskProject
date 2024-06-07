using Help_Desk_Project.Models;

namespace Help_Desk_Project.DAL
{
    public class TicketsRepository
    {
        private readonly HelpDeskContext _context;

        public TicketsRepository(HelpDeskContext context)
        {
            _context = context;
        }

        public List<Ticket> GetAllTickets()
        {
            return _context.Tickets.ToList();

        }

        public Ticket GetTicketId(int id)
        {
            Ticket ticket = _context.Tickets.FirstOrDefault(t => t.TicketId == id);
            return ticket;
        }

        public void AddTicket(TicketCreationDto ticketdto)
        {
            Ticket ticket = new Ticket() 
            {
                Subject = ticketdto.Subject,
                Details = ticketdto.Details,
                TicketStatus = false,


            };
            _context.Tickets.Add(ticket);
            _context.SaveChanges();
         
        }

        public void UpdateTicket(TicketUpdateDto ticketdto)
        {
            Ticket ticket = new Ticket() 
            {
                Subject = ticketdto.Subject,
                Details = ticketdto.Details,
                Resolution = ticketdto.Resolution,
                TicketStatus = ticketdto.TicketStatus,
            };
            _context.Tickets.Update(ticket);
            _context.SaveChanges();
        }

        public void DeleteTicket(int id)
        {
            Ticket ticket = _context.Tickets.FirstOrDefault(t => t.TicketId == id);
            if (ticket != null)
            {
                _context.Tickets.Remove(ticket);
                _context.SaveChanges();


            }
        }
    }
}

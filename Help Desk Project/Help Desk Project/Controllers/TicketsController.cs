using Help_Desk_Project.DAL;
using Help_Desk_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace Help_Desk_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsRepository _repo;

        public TicketsController(TicketsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllTickets()
        {
            List<Ticket> tickets = _repo.GetAllTickets();
            return Ok(tickets);
        }

        [HttpGet("{id}")]
        public IActionResult GetTicketsById(int id)
        {
            Ticket ticket = _repo.GetTicketId(id);
            if (ticket != null)
            {
                return Ok(ticket);
            }
            return NotFound();

        }

        [HttpPost]
        public IActionResult AddTicket([FromBody] TicketCreationDto ticketDto)
        {
            _repo.AddTicket(ticketDto);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTicket(int id, [FromBody] TicketUpdateDto ticketDto) 
        {
            Ticket ticket = _repo.GetTicketId(id);
            if (ticket == null)
            { 
                return NotFound();
            }
            ticket.Subject = ticketDto.Subject;
            ticket.Details = ticketDto.Details;
            ticket.Resolution = ticketDto.Resolution;
            ticket.TicketStatus = ticketDto.TicketStatus;
            _repo.UpdateTicket(ticket);
            return NoContent();
            
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(int id)
        {
            Ticket ticket = _repo.GetTicketId(id);
            if (ticket == null)
            { 
                return NotFound();
            }
            _repo.DeleteTicket(id);
            return NoContent();
            
        }

    }
}

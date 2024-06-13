namespace Help_Desk_Project.Models
{
    public class TicketCreationDto
    {
        public string? Subject { get; set; }
        public string? Details { get; set; }

        public string? ClientId { get; set; }

        public string? TechId { get; set; }

    }
}

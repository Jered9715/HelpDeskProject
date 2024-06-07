namespace Help_Desk_Project.Models
{
    public class TicketUpdateDto
    {
        public string? Subject { get; set; }

        public string? Details { get; set; }

        public string? Resolution { get; set; }

        public bool? TicketStatus { get; set; }

    }
}

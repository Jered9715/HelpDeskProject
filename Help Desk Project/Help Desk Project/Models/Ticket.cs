using System;
using System.Collections.Generic;

namespace Help_Desk_Project.Models;

public partial class Ticket
{
    public int TicketId { get; set; }

    public string? Subject { get; set; }

    public string? Details { get; set; }

    public string? Resolution { get; set; }

    public bool? TicketStatus { get; set; }

    public virtual ICollection<Bookmark> Bookmarks { get; set; } = new List<Bookmark>();
}

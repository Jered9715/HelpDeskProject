using System;
using System.Collections.Generic;

namespace Help_Desk_Project.Models;

public partial class Bookmark
{
    public int BookmarkId { get; set; }

    public string? UserId { get; set; }

    public int? TicketId { get; set; }

    public virtual Ticket? Ticket { get; set; }
}

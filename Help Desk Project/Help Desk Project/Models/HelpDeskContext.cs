using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Help_Desk_Project.Models;

public partial class HelpDeskContext : DbContext
{
    public HelpDeskContext()
    {
    }

    public HelpDeskContext(DbContextOptions<HelpDeskContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bookmark> Bookmarks { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bookmark>(entity =>
        {
            entity.HasKey(e => e.BookmarkId).HasName("PK__Bookmark__541A3B712F8CECAC");

            entity.Property(e => e.UserId).HasMaxLength(50);

            entity.HasOne(d => d.Ticket).WithMany(p => p.Bookmarks)
                .HasForeignKey(d => d.TicketId)
                .HasConstraintName("FK__Bookmarks__Ticke__398D8EEE");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.TicketId).HasName("PK__Tickets__712CC60792E929C1");

            entity.Property(e => e.ClientId).HasMaxLength(50);
            entity.Property(e => e.TechId).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { BookmarkService } from '../../services/bookmarks.service';
import { ticket } from '../../interfaces/ticket';
import { bookmark } from '../../interfaces/bookmark';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bookmarks-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './bookmarks-list.component.html',
  styleUrl: './bookmarks-list.component.css'
})
export class BookmarksListComponent implements OnInit {
bookmarks: bookmark[]=[];
bookmarksTicketIds: number[]=[];
bookmarkedTickets: ticket[]=[];
constructor(private ticketService: TicketsService, private bookmarkService: BookmarkService, private router: Router){}
  ngOnInit(): void {
    this.fetchBookmarks();
  }
  userId: string = 'random';
fetchBookmarks(): void{
  this.bookmarkService.getBookmarks().subscribe((data: bookmark[])=>{
    console.log('fetching bookmarks/data', data);
    this.bookmarks = data;
    console.log('fetching bookmarks/bookmarks', this.bookmarks)
   console.log('fetching bookmarks');
   this.fetchBookedmarkedTicketsDetails();
  }
  )
}
//Thought process was to get the bookmarks > take out specicically the numbers > put those to a list > then use them to sort through each to get list
//may find a easier way by using either two way binding or events
//wish there was something like linq that we can use
fetchBookedmarkedTicketsDetails(): void{
  console.log('fetching bookmarks',this.bookmarks)
this.bookmarks.forEach( bookmark=> {
  console.log(bookmark)
  this.bookmarksTicketIds.push(bookmark.ticketId)
});
console.log('fetching bookmark details');
console.log(this.bookmarksTicketIds)
this.bookmarksTicketIds.forEach(id =>{
this.ticketService.getTicket(id).subscribe((data: ticket)=>{
  this.bookmarkedTickets.push(data)
})
});
}
}
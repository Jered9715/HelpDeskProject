import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ticket } from '../interfaces/ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private apiUrl = 'https://localhost:7021/api/Tickets'

  constructor(private http: HttpClient) { }

  getTickets(): Observable<ticket[]> {
   return this.http.get<ticket[]>(this.apiUrl)
  }

  getTicket(id: number): Observable<ticket>{
    return this.http.get<ticket>(`${this.apiUrl}/${id}`);
  }


  addTicket(ticket: ticket):Observable<ticket>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<ticket>(this.apiUrl,ticket, httpOptions);
  }

  /*
  updateTicket(updatedTicket: ticket) : Observable<ticket>{
    const httpOptions = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<ticket>(`${this.apiUrl}/${updatedTicket.ticketId}`)
  }
*/
  deleteTicket(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}

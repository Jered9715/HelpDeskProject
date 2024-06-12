import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookmark } from '../interfaces/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private apiUrl = 'https://localhost:7021/api/Bookmarks';

  constructor(private http: HttpClient) { }

  getBookmarks(userId: string): Observable<bookmark[]> {
    return this.http.get<bookmark[]>(`${this.apiUrl}/${userId}`);
  }

  addBookmark(bookmark: bookmark): Observable<bookmark> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<bookmark>(this.apiUrl, bookmark, httpOptions);
  }

  removeBookmark(userId: string, ticketId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}/${ticketId}`);
  }
}

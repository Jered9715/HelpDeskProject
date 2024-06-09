import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookmark } from '../interfaces/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  private apiUrl= 'https://localhost:7021/api/Bookmarks'
  
  constructor(private http: HttpClient){}
  
  getBookmarks(): Observable<bookmark[]>{
    return this.http.get<bookmark[]>(this.apiUrl)
  }


  getBookmark(id: number): Observable<bookmark>{
    return this.http.get<bookmark>(`${this.apiUrl}/${id}`);
  } 

  addBookmark(bookmark: bookmark): Observable<bookmark>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<bookmark>(this.apiUrl,bookmark, httpOptions)
  }

  /*
  updateBookmark(updatedBookmark: bookmark) : Observable<bookmark>{
    const httpOptions = {
      header: new HttpHeaders({
        'Content-Type': 'applcation/json'
      })
    };
    return this.http.put<bookmark>(`${this.apiUrl}/${updatedBookmark.bookmarkId}`)
  }
*/

  deleteBookmark(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}

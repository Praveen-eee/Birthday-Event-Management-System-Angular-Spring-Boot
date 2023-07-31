import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookEvent } from '../class/bookevent';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class BookEventService {


  private baseUrl = 'http://localhost:8080/user/bookTheme';
  private baseUrl2 = 'http://localhost:8080/user/editTheme';
  private baseUrl3 = 'http://localhost:8080/user/getBookedTheme';
  private baseUrl4 = 'http://localhost:8080/user/deleteTheme';
  private baseUrl5 = 'http://localhost:8080/user/editReview';

  constructor(private httpclient: HttpClient) { }

  viewEvent(): Observable<BookEvent[]>{
    return this.httpclient.get<BookEvent[]>(`${this.baseUrl3}`);
  }

  bookEvent(add: BookEvent ): Observable<object>{
    return this.httpclient.post(`${this.baseUrl}`,add);
  }

  viewEventbyId(eventid: number): Observable<BookEvent>
  {
    return this.httpclient.get<BookEvent>(`${this.baseUrl3}/${eventid}`);
  }

  editEvent(eventid: number, ad: BookEvent): Observable<object>{
    return this.httpclient.put(`${this.baseUrl2}/${eventid}`, ad);
  }

  deleteEvent(eventid: number): Observable<object>{
    return this.httpclient.delete(`${this.baseUrl4}/${eventid}`);
  }

  // unique

  getcustomerByuserId(userId: number): Observable<User>
  {
    return this.httpclient.get<User>(`http://localhost:8080/getUser/`+userId);
  }

  getBookingById(userId: number): Observable<BookEvent[]>{
    return this.httpclient.get<BookEvent[]>(`http://localhost:8080/mybooking/`+userId);
  }
  updateReview(ad: BookEvent): Observable<object>{
    return this.httpclient.put(`${this.baseUrl5}/${ad.eventId}`,ad);
  }
}

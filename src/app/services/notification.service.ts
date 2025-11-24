import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = environment.apiUrl;
  url = `${this.baseUrl}/api/notification`;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  readed(id: number) {
    return this.http.get(this.url+'/readed/'+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url = 'https://nalumos-backend-production.up.railway.app/api/notification';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  readed(id: number) {
    return this.http.get(this.url+'/readed/'+id);
  }
}

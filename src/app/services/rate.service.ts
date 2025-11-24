import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private baseUrl = environment.apiUrl;
  url = `${this.baseUrl}/api/rates`;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url);
  }

  delete(id: number) {
    return this.httpClient.delete(this.url+'/'+id);
  }
}

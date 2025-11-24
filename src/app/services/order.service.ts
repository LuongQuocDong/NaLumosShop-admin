import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = environment.apiUrl;
  url = `${this.baseUrl}/api/orders`;

  urlOrderDetail = `${this.baseUrl}/api/orderDetail`;

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.url);
  }

  getById(id:number) {
    return this.httpClient.get(this.url+'/'+id);
  }

  getByOrder(id:number) {
    return this.httpClient.get(this.urlOrderDetail+'/order/'+id);
  }

  cancel(id: number) {
    return this.httpClient.get(this.url+'/cancel/'+id);
  }

  deliver(id: number) {
    return this.httpClient.get(this.url+'/deliver/'+id);
  }

  success(id: number) {
    return this.httpClient.get(this.url+'/success/'+id);
  }
}

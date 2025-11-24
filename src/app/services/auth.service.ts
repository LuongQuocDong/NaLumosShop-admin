import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../common/Login';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;
  url = `${this.baseUrl}/api/auth/`;

  constructor(private sessionService: SessionService, private http: HttpClient) { }

  login(userData: Login): Observable<any> {
    return this.http.post(this.url + 'signin',userData);
  }

}

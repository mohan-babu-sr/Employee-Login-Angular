import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:1010/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions
    );
  } 

  register(user: any): Observable<any> {
    // console.log(user);
    return this.http.post(
      AUTH_API + 'signup',
      {
        username: user.username,
        email: user.email,
        role: [user.role],
        password: user.password,
      },
      httpOptions
    );
  }
}

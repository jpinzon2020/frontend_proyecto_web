import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';

const baseUrl = 'http://localhost:8080/api/v1/';
@Injectable({
  providedIn: 'root'
})

export class SendMailService {

  constructor(private http: HttpClient) { }

  sendForgotPassService(data: any): Observable<any> {
    return this.http.get<User[]>(`${baseUrl}msg`, data);
  }
}

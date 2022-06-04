import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Delito } from 'src/app/models/delito/delito';

const baseUrl = 'http://localhost:8080/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class DelitoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Delito[]> {
    return this.http.get<Delito[]>(`${baseUrl}Delitos`)
  }

  get(id: string): Observable<Delito> {
    return this.http.get<Delito>(`${baseUrl}delito/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}delito`, data)
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}updateDelito/${id}`, data)
  } 

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}deleteDelito/${id}`)
  }
}

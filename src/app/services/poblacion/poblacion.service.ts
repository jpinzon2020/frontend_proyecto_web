import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poblacion } from 'src/app/models/poblacion/poblacion'; 

const baseUrl = 'http://localhost:8080/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class PoblacionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Poblacion[]> {
    return this.http.get<Poblacion[]>(`${baseUrl}poblaciones`)
  }

  get(id: string): Observable<Poblacion> {
    return this.http.get<Poblacion>(`${baseUrl}poblaciones/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}createPoblacion`, data)
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}updatePoblacion/${id}`, data)
  } 

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}deletePoblacion/${id}`)
  }
}

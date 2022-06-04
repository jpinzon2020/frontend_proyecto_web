import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoArmado } from 'src/app/models/grupo-armado/grupo-armado';

const baseUrl = 'http://localhost:8080/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class GrupoArmadoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GrupoArmado[]> {
    return this.http.get<GrupoArmado[]>(`${baseUrl}GrupoArmados`)
  }

  get(id: string): Observable<GrupoArmado> {
    return this.http.get<GrupoArmado>(`${baseUrl}GrupoArmado/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}GrupoArmado`, data)
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}updateGrupoArmado/${id}`, data)
  } 

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}deleteGrupoArmado/${id}`)
  }
}

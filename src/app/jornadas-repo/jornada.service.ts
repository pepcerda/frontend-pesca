import { Injectable } from '@angular/core';
import { Jornada } from './jornada';

import { of,  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  private urlEndPoint: string = "http://localhost:8080/api/jornadas";
  private httpHeaders = new HttpHeaders({'Content--Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getJornadas(): Observable<Jornada[]> {
    //return of(JORNADAS);
    return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Jornada[])
    );
  }

  create(jornada: Jornada) : Observable<Jornada> {
    console.log(jornada)
    return this.http.post<Jornada>(this.urlEndPoint, jornada, {headers: this.httpHeaders})
  }

  getJornada(id: number): Observable<Jornada>{
    return this.http.get<Jornada>(`${this.urlEndPoint}/${id}`)
  }

  update(jornada: Jornada): Observable<Jornada> {
    return this.http.put<Jornada>(`${this.urlEndPoint}/${jornada.id}`, jornada, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Jornada> {
    return this.http.delete<Jornada>(`${this.urlEndPoint}/${id}`, {headers:this.httpHeaders}); 
  }
}

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
    return this.http.post<Jornada>(this.urlEndPoint, jornada, {headers: this.httpHeaders})
  }
}

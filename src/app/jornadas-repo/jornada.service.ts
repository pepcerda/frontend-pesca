import { Injectable } from '@angular/core';
import { Jornada } from './jornada';

import { of,  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  private urlEndPoint: string = "http://localhost:8080/api/jornadas";
  private httpHeaders = new HttpHeaders({'Content--Type': 'application/json'})
  constructor(private http: HttpClient, private router: Router) { }

  getJornadas(): Observable<Jornada[]> {
    //return of(JORNADAS);
    return this.http.get(this.urlEndPoint).pipe(
      map( response => {
        let jornadas = response as Jornada[];

        return jornadas.map(jornada => {
          jornada.modalidad = jornada.modalidad.toLowerCase();
          return jornada; 
        });
      })
    );
  }

  create(jornada: Jornada) : Observable<Jornada> {
    console.log(jornada)
    return this.http.post<Jornada>(this.urlEndPoint, jornada, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  getJornada(id: number): Observable<Jornada>{
    return this.http.get<Jornada>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/jornadas']);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  update(jornada: Jornada): Observable<Jornada> {
    return this.http.put<Jornada>(`${this.urlEndPoint}/${jornada.id}`, jornada, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  delete(id: number): Observable<Jornada> {
    return this.http.delete<Jornada>(`${this.urlEndPoint}/${id}`, {headers:this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error al eliminar al cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}

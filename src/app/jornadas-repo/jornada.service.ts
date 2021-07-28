import { Injectable } from '@angular/core';
import { Jornada } from './jornada';
import { JORNADAS } from './jornadas-repo.json';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  constructor() { }

  getJornadas(): Observable<Jornada[]> {
    return of(JORNADAS);
  }
}

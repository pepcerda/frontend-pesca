import { Component, OnInit } from '@angular/core';
import { Jornada } from './jornada';
import {JornadaService} from './jornada.service';

@Component({
  selector: 'app-jornadas-repo',
  templateUrl: './jornadas-repo.component.html',
  styleUrls: ['./jornadas-repo.component.css']
})
export class JornadasRepoComponent implements OnInit {

  jornadas!: Jornada[];

  constructor(private jornadaService: JornadaService) { }

  ngOnInit(): void {
    this.jornadaService.getJornadas().subscribe(
      (jornadas) => this.jornadas = jornadas
    );
  }

}

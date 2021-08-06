import { Component, OnInit } from '@angular/core';
import { Jornada } from './jornada';
import { JornadaService } from './jornada.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public jornada: Jornada = new Jornada()
  public titulo: string = "Crear jornada"

  constructor(private jornadaService: JornadaService, private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void{
    this.jornadaService.create(this.jornada).subscribe(
      response => this.router.navigate(['/jornadas'])
    )
    console.log(this.jornada)
  }

}

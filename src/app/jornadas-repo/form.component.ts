import { Component, OnInit } from '@angular/core';
import { Jornada } from './jornada';
import { JornadaService } from './jornada.service';
import { Router, ActivatedRoute } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public jornada: Jornada = new Jornada()
  public titulo: string = "Crear jornada"

  constructor(private jornadaService: JornadaService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarJornada();
  }

  cargarJornada(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.jornadaService.getJornada(id).subscribe((jornada) => this.jornada = jornada)
      }
    })
  }

  public create(): void{
    this.jornadaService.create(this.jornada).subscribe(
      response => {this.router.navigate(['/jornadas'])
      swal.fire({
          icon: 'success',
          title: 'Jornada creada correctamente',
        })}
    )
    console.log(this.jornada)
  }

  public update(): void{
    this.jornadaService.update(this.jornada)
    .subscribe(jornada => {
      this.router.navigate(['/jornadas'])
      swal.fire({
          icon: 'success',
          title: 'Jornada actualizada correctamente',
        })
    })
  }

  public setModalidad(modalidad:string){
    this.jornada.modalidad = modalidad;
  }

  public setDirViento(dirviento:string){
    this.jornada.dirViento = dirviento;
  }

  public setFecha(fecha: Date){
    this.jornada.fechaSalida = fecha;
  }
}

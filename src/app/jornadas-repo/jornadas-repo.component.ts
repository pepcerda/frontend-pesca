import { Component, OnInit } from '@angular/core';
import { Jornada } from './jornada';
import {JornadaService} from './jornada.service';
import swal from 'sweetalert2';

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

  delete(jornada: Jornada): void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro de eliminar la jornada de pesca?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.jornadaService.delete(jornada.id).subscribe(
            response => {
              this.jornadas = this.jornadas.filter(jor => jor !== jornada)
              swalWithBootstrapButtons.fire(
                'Eliminada!',
                'Jornada eliminada con éxito.',
                'success'
                )
            }
          )

  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelada',
      'La jornada se mantiene.',
      'error'
    )
  }
})
  }

}

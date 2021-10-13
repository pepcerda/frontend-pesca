import { Component } from '@angular/core';
import {Output, EventEmitter, Input } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-fechasalida',
  templateUrl: './fechasalida.component.html',
  styleUrls: ['./fechasalida.component.css']
})
export class FechasalidaComponent {

  @Output () fecha = new EventEmitter<Date>();
  @Input () fechaPrevia = new Date(); 

  constructor() { }

  setFecha(event: MatDatepickerInputEvent<Date>) {
    this.fecha.emit(event.value as Date);
  }
}

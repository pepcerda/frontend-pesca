import { Component} from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

interface Modalidad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html'
})

export class ModalidadComponent {

  @Output() modalidad = new EventEmitter<string>();
  @Input() modPrevia = '';

  modalidades : Modalidad[] = [
    {value: 'in', viewValue: 'INCHIKU'},
    {value: 'cf', viewValue: 'Currican de fondo'},
    {value: 'ca', viewValue: 'Currican de alutra'},
    {value: 'pf', viewValue: 'Pesca de fondo'},
    {value: 'jig', viewValue: 'Jigging'},
    {value: 'eg', viewValue: 'Egging'},
    {value: 'br', viewValue: 'Brumeo'}
  ];

  setModalidad(modalidad: string) {
    this.modalidad.emit(modalidad);
  }
}

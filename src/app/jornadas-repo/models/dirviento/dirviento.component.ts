import { Component } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

interface DirViento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dirviento',
  templateUrl: './dirviento.component.html'
})
export class DirvientoComponent{

  @Output() dirvient = new EventEmitter<string>();
  @Input() dirPrevia = '';

  dirviento : DirViento[] = [
    {value: 'N', viewValue: 'Norte'},
    {value: 'NE', viewValue: 'Noreste'},
    {value: 'E', viewValue: 'Este'},
    {value: 'SE', viewValue: 'Sureste'},
    {value: 'S', viewValue: 'Sud'},
    {value: 'SW', viewValue: 'Suroeste'},
    {value: 'W', viewValue: 'Oeste'},
    {value: 'NW', viewValue: 'Noroeste'}
  ];

  setDirViento(modalidad: string) {
    this.dirvient.emit(modalidad);
  }
}

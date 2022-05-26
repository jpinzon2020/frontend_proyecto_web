import { Component, OnInit } from '@angular/core';
import { Poblacion } from 'src/app/models/poblacion/poblacion';
import { PoblacionService } from 'src/app/services/poblacion/poblacion.service';

@Component({
  selector: 'app-add-poblacion',
  templateUrl: './add-poblacion.component.html',
  styleUrls: ['./add-poblacion.component.css']
})
export class AddPoblacionComponent implements OnInit {

  poblacion = new Poblacion();
  submitted = false;
  msgError = '';

  constructor(private poblacionService: PoblacionService) { }

  ngOnInit(): void {
  }

  existsPK (val:string): void {
    this.poblacionService.get(val)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  savePoblacion(): void {
    const data = {
      nombre: this.poblacion.nombre,
      caracteristicas: this.poblacion.caracteristicas,
      nomada: this.poblacion.esNomada
    };

    this.poblacionService.create(data)
      .subscribe(
        data => {
          this.submitted=true;
          console.log(data);
        },
        error => {
          this.msgError  = error.message +' \n '+ error.error.message;
          console.log(error);
        });
  }

  newPoblacion() {
    this.submitted = false;
    this.poblacion.nombre = '';
    this.poblacion.caracteristicas = '';
    this.poblacion.esNomada = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { GrupoArmado } from 'src/app/models/grupo-armado/grupo-armado';
import { GrupoArmadoService } from 'src/app/services/grupo-armado/grupo-armado.service'; 


@Component({
  selector: 'app-add-grupo-armado',
  templateUrl: './add-grupo-armado.component.html',
  styleUrls: ['./add-grupo-armado.component.css']
})
export class AddGrupoArmadoComponent implements OnInit {

  grupoArmado = new GrupoArmado();
  submitted = false;
  msgError = '';

  constructor(private grupoArmadoService: GrupoArmadoService) { }

  ngOnInit(): void {
  }

  existsPK (val:string): void {
    this.grupoArmadoService.get(val)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveGrupo(): void {
    const data = {
      name: this.grupoArmado.nombre,
      anio_inicio: this.grupoArmado.anio_inicio,
      ideologia: this.grupoArmado.ideologia,
      description: this.grupoArmado.description
    };


    this.grupoArmadoService.create(data)
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

  newGrupo() {
    this.submitted = false;
    this.grupoArmado.nombre = '';
    this.grupoArmado.anio_inicio = new Date();
    this.grupoArmado.ideologia = '';
    this.grupoArmado.description = '';
  }

}

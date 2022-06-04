import { Component, OnInit } from '@angular/core';
import { Delito } from 'src/app/models/delito/delito';
import { DelitoService } from 'src/app/services/delito/delito.service';

@Component({
  selector: 'app-add-delito',
  templateUrl: './add-delito.component.html',
  styleUrls: ['./add-delito.component.css']
})
export class AddDelitoComponent implements OnInit {

  delito = new Delito();
  submitted = false;
  msgError = '';

  constructor(private delitoService: DelitoService) { }

  ngOnInit(): void {
  }

  existsPK (val:string): void {
    this.delitoService.get(val)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveDelito(): void {
    const data = {
      nombre: this.delito.nombre,
    };

    this.delitoService.create(data)
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

  newDelito() {
    this.submitted = false;
    this.delito.nombre = '';
  }


}

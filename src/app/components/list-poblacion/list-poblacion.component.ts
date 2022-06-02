import { Component, OnInit } from '@angular/core';
import { Poblacion } from 'src/app/models/poblacion/poblacion';
import { PoblacionService } from 'src/app/services/poblacion/poblacion.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-poblacion',
  templateUrl: './list-poblacion.component.html',
  styleUrls: ['./list-poblacion.component.css']
})
export class ListPoblacionComponent implements OnInit {


  poblacionSet: Poblacion[];
  poblacionFil: Poblacion[];
  namePoblacion: string;
  collectionSize: number;
  searchTerm: string;
  closeModal: string;
  msgError = '';
  currentPoblacion: any;
  currentIndex = -1; 
  
  constructor(private poblacionService: PoblacionService, private modalService: NgbModal) { 

    this.poblacionSet = new Array();
    this.poblacionFil = new Array();
    this.namePoblacion = '';
    this.collectionSize = 0;
    this.searchTerm = '';
    this.closeModal = '';    
  }

  ngOnInit(): void {
    this.refreshList();
  }

  search(value: string): void {
    this.poblacionFil = this.poblacionSet.filter((val) => val.nombre.toLowerCase().includes(value));
    this.collectionSize = this.poblacionFil.length;
  }

  retrievePoblaciones(): void {
    this.poblacionService.getAll()
      .subscribe(
        data => {
          this.poblacionSet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrievePoblacion(val:string): void {
    this.poblacionService.get(val)
      .subscribe(
        data => {
          this.currentPoblacion = data;
          console.log(data);
        },
        error => {
          this.msgError =  error.message +' \n '+ error.error.message;
          console.log(error);
        });
  }

  updatePoblacion(): void {
    this.poblacionService.update(this.currentPoblacion.nombre, this.currentPoblacion)
       .subscribe(
         data => {
           this.refreshList();
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }

   deletePoblacion(val1: string): void {
    this.poblacionService.delete(val1)
       .subscribe(
         data => {
           this.refreshList();
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }

   setActivePoblacion(poblacion: Poblacion, index : number): void {
    this.currentPoblacion = poblacion;
    this.currentIndex = index
  }

  refreshList(): void {
    this.retrievePoblaciones();
  }

  //Emergent Window Edit (exit: x or esc or click backdrop)
  triggerModal(content:any, val:Poblacion) {
    this.currentPoblacion = val
    this.retrievePoblacion(this.currentPoblacion.nombre)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

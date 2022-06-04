import { Component, OnInit } from '@angular/core';
import { Delito } from 'src/app/models/delito/delito';
import { DelitoService } from 'src/app/services/delito/delito.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-delito',
  templateUrl: './list-delito.component.html',
  styleUrls: ['./list-delito.component.css']
})
export class ListDelitoComponent implements OnInit {

  delitoSet: Delito[];
  delitoFil: Delito[];
  nameDelito: string;
  collectionSize: number;
  searchTerm: string;
  closeModal: string;
  msgError = '';
  currentDelito: any;
  currentIndex = -1; 

  constructor(private delitoService: DelitoService, private modalService: NgbModal) { 

    this.delitoSet = new Array();
    this.delitoFil = new Array();
    this.nameDelito = '';
    this.collectionSize = 0;
    this.searchTerm = '';
    this.closeModal = '';    
  }

  ngOnInit(): void {
    this.refreshList();
  }

  search(value: string): void {
    this.delitoFil = this.delitoSet.filter((val) => val.nombre.toLowerCase().includes(value));
    this.collectionSize = this.delitoFil.length;
  }

  retrieveDelitos(): void {
    this.delitoService.getAll()
      .subscribe(
        data => {
          this.delitoSet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveDelito(val:string): void {
    this.delitoService.get(val)
      .subscribe(
        data => {
          this.currentDelito = data;
          console.log(data);
        },
        error => {
          this.msgError =  error.message +' \n '+ error.error.message;
          console.log(error);
        });
  }

  updateDelito(): void {
    this.delitoService.update(this.currentDelito.nombre, this.currentDelito)
       .subscribe(
         data => {
           this.refreshList();
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }



   deleteDelito(val1: string): void {
    this.delitoService.delete(val1)
       .subscribe(
         data => {
           this.refreshList();
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }

   setActiveDelito(delito: Delito, index : number): void {
    this.currentDelito = delito;
    this.currentIndex = index
  }

  refreshList(): void {
    this.retrieveDelitos();
  }


  //Emergent Window Edit (exit: x or esc or click backdrop)
  triggerModal(content:any, val:Delito) {
    this.currentDelito = val
    this.retrieveDelito(this.currentDelito.nombre)
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

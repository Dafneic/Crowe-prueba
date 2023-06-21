import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from './rest.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalDetalleComponent } from '../modal-detalle/modal-detalle.component'; 



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})

export class PersonajesComponent {
  personajes: any = []
  mydialog: MatDialog | null = null 

  constructor( public json: RestService, dialog: MatDialog){
    this.json.getJson('https://swapi.dev/api/people').subscribe((res: any) =>{
    
      console.log(res);
       this.personajes = res.results
    })
    this.mydialog = dialog
  }

  openDialog(res: any): void {
    console.log('hola', res)
    const dialogRef = this.mydialog?.open(ModalDetalleComponent, {
      width: '450px',
      data: res
    });
    dialogRef?.afterClosed().subscribe(res => {

    });
  }
  
}

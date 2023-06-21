import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from './rest.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalDetallePlanetasComponent } from '../modal-detalle-planetas/modal-detalle-planetas.component';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})

export class PlanetasComponent {

  planetas: any = []
  mydialog: MatDialog | null = null 

  constructor( public json: RestService, dialog: MatDialog){
    this.json.getJson('https://swapi.dev/api/planets').subscribe((res: any) =>{
      console.log(res);
      this.planetas = res.results
    })
    this.mydialog = dialog
  }
  openDialog(res: any): void {
    console.log('hola', res)
    const dialogRef = this.mydialog?.open(ModalDetallePlanetasComponent, {
      width: '450px',
      data: res
    });
    dialogRef?.afterClosed().subscribe(res => {

    });
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-modal-detalle-planetas',
  templateUrl: './modal-detalle-planetas.component.html',
  styleUrls: ['./modal-detalle-planetas.component.css']
})
export class ModalDetallePlanetasComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalDetallePlanetasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}

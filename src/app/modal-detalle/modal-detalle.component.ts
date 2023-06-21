import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.css'],
})
export class ModalDetalleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}

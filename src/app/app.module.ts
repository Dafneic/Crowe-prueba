import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';
import { ModalDetallePlanetasComponent } from './modal-detalle-planetas/modal-detalle-planetas.component';




@NgModule({
  declarations: [
    AppComponent,
    PlanetasComponent,
    PersonajesComponent,
    ModalDetalleComponent,
    ModalDetallePlanetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    
    MatDialogModule,
  ],
  exports: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

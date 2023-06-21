import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallePlanetasComponent } from './modal-detalle-planetas.component';

describe('ModalDetallePlanetasComponent', () => {
  let component: ModalDetallePlanetasComponent;
  let fixture: ComponentFixture<ModalDetallePlanetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDetallePlanetasComponent]
    });
    fixture = TestBed.createComponent(ModalDetallePlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

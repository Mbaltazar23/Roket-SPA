import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArbolComponent } from './detalle-arbol.component';

describe('DetalleArbolComponent', () => {
  let component: DetalleArbolComponent;
  let fixture: ComponentFixture<DetalleArbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleArbolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

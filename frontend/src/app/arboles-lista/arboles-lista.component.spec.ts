import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolesListaComponent } from './arboles-lista.component';

describe('ArbolesListaComponent', () => {
  let component: ArbolesListaComponent;
  let fixture: ComponentFixture<ArbolesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbolesListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbolesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

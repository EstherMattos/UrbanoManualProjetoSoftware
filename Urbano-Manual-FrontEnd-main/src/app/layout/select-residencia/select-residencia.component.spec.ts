import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResidenciaComponent } from './select-residencia.component';

describe('SelectResidenciaComponent', () => {
  let component: SelectResidenciaComponent;
  let fixture: ComponentFixture<SelectResidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectResidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarResidenciaComponent } from './cadastrar-residencia.component';

describe('CadastrarResidenciaComponent', () => {
  let component: CadastrarResidenciaComponent;
  let fixture: ComponentFixture<CadastrarResidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarResidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

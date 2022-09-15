import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRendaComponent } from './cadastrar-renda.component';

describe('CadastrarRendaComponent', () => {
  let component: CadastrarRendaComponent;
  let fixture: ComponentFixture<CadastrarRendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarRendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

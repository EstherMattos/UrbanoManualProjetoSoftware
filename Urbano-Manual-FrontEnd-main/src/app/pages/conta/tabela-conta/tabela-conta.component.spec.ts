import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaContaComponent } from './tabela-conta.component';

describe('TabelaContaComponent', () => {
  let component: TabelaContaComponent;
  let fixture: ComponentFixture<TabelaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

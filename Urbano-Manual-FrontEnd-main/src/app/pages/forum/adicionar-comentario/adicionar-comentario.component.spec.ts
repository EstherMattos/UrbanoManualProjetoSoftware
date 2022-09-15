import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarComentarioComponent } from './adicionar-comentario.component';

describe('AdicionarComentarioComponent', () => {
  let component: AdicionarComentarioComponent;
  let fixture: ComponentFixture<AdicionarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

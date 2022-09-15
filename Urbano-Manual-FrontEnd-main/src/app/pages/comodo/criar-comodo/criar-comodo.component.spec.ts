import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarComodoComponent } from './criar-comodo.component';

describe('CriarComodoComponent', () => {
  let component: CriarComodoComponent;
  let fixture: ComponentFixture<CriarComodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarComodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarComodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

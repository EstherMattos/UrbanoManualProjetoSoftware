import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodoComponent } from './comodo.component';

describe('ComodoComponent', () => {
  let component: ComodoComponent;
  let fixture: ComponentFixture<ComodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

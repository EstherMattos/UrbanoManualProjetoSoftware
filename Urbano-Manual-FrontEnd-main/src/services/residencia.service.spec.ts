import { TestBed } from '@angular/core/testing';

import { ResidenciaService } from './residencia.service';

describe('ResidenciaService', () => {
  let service: ResidenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

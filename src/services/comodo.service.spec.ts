import { TestBed } from '@angular/core/testing';

import { ComodoService } from './comodo.service';

describe('ComodoService', () => {
  let service: ComodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

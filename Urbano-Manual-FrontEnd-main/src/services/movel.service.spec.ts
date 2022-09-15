import { TestBed } from '@angular/core/testing';

import { MovelService } from './movel.service';

describe('MovelService', () => {
  let service: MovelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PoblacionService } from './poblacion.service';

describe('PoblacionService', () => {
  let service: PoblacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoblacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

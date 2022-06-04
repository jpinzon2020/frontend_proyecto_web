import { TestBed } from '@angular/core/testing';

import { DelitoService } from './delito.service';

describe('DelitoService', () => {
  let service: DelitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

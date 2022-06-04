import { TestBed } from '@angular/core/testing';

import { GrupoArmadoService } from './grupo-armado.service';

describe('GrupoArmadoService', () => {
  let service: GrupoArmadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoArmadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

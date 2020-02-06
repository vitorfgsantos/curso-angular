import { TestBed } from '@angular/core/testing';

import { ExtratoService } from './extrato.service';

describe('ExtratoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtratoService = TestBed.get(ExtratoService);
    expect(service).toBeTruthy();
  });
});

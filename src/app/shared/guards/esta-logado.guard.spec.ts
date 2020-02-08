import { TestBed, async, inject } from '@angular/core/testing';

import { EstaLogadoGuard } from './esta-logado.guard';

describe('EstaLogadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstaLogadoGuard]
    });
  });

  it('should ...', inject([EstaLogadoGuard], (guard: EstaLogadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});

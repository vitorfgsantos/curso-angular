import { TestBed, async, inject } from '@angular/core/testing';

import { NaoEstaLogadoGuard } from './nao-esta-logado.guard';

describe('NaoEstaLogadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaoEstaLogadoGuard]
    });
  });

  it('should ...', inject([NaoEstaLogadoGuard], (guard: NaoEstaLogadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});

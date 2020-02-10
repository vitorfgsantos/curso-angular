import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NaoEstaLogadoGuard } from './nao-esta-logado.guard';

describe('NaoEstaLogadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaoEstaLogadoGuard],
      imports: [
        RouterTestingModule,
      ]
    });
  });

  it('should ...', inject([NaoEstaLogadoGuard], (guard: NaoEstaLogadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EstaLogadoGuard } from './esta-logado.guard';

describe('EstaLogadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstaLogadoGuard],
      imports: [
        RouterTestingModule,
      ]
    });
  });

  it('should ...', inject([EstaLogadoGuard], (guard: EstaLogadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});

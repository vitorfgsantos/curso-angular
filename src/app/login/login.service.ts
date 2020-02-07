import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Usuario } from '../shared/interfaces/usuario.interface';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) {
    console.log(authService);
  }

  logar(email: string, senha: string): Observable<Usuario> {
    if (email === 'vitorfgsantos@outlook.com' && senha === '123') {
      return of({
        nome: 'Vitor',
        email: 'vitorfgsantos@outlook.com',
      }).pipe(
        delay(2000),
        tap(usuario => {
          this.authService.setUsuario(usuario);
        }),
      );

    } else {
      const error = throwError('Usuário e senha incorretos');
      // return timer(3000).pipe(mergeMap(_e => error));
      return error;
    }
  }
}

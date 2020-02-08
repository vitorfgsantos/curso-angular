import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogado: Usuario;

  constructor(
    private router: Router,
  ) { }

  setUsuario(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioLogado = usuario;
  }

  getUsuario() {
    if (this.usuarioLogado) {
      return this.usuarioLogado;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const parsedUsuarioGuardado = JSON.parse(usuarioGuardado);
      this.usuarioLogado = parsedUsuarioGuardado;
      return parsedUsuarioGuardado;
    }

    return null;
  }

  estaLogado(): boolean {
    return this.getUsuario() ? true : false;
  }

  logout() {
    this.setUsuario(null);
    this.router.navigate(['login']);
  }
}

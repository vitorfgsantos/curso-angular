import { Injectable } from '@angular/core';

import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogado: Usuario;

  constructor() { }

  setUsuario(usuario: Usuario) {
    this.usuarioLogado = usuario;
  }

  getUsuario() {
    return this.usuarioLogado;
  }
}

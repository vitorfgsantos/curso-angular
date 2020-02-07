import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    const usuario = this.authService.getUsuario();
    console.log('O usuário logado é: ', usuario.nome);
  }

}

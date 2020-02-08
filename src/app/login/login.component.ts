import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string;
  senha: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  login() {
    this.loginService.logar(this.email, this.senha)
      .subscribe(
        response => {
          this.router.navigate(['home']);
      }, error => {
        console.log(error)
        console.error('NÃO DEU CERTO! NÃO LOGOU!');
      });
  }


}

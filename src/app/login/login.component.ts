import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  quandoSubmeter(form: FormGroup) {
    console.log(form);

    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      return;
    }

    this.login();
  }

  exibeErro(nomeCotrole: string, form: FormGroup) {
    if (!form.controls[nomeCotrole]) {
      return false;
    }

    return form.controls[nomeCotrole].invalid && form.controls[nomeCotrole].touched;
  }


}

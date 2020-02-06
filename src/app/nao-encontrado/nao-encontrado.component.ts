import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.scss']
})
export class NaoEncontradoComponent {

  constructor(
    private router: Router
  ) { }

  onBotaoHomeClick() {
    console.log('Direcionar para Home');
    this.router.navigate(['home']);
  }

}

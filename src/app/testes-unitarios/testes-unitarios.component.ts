import { Component } from '@angular/core';

@Component({
  selector: 'app-testes-unitarios',
  templateUrl: './testes-unitarios.component.html',
  styleUrls: ['./testes-unitarios.component.scss']
})
export class TestesUnitariosComponent {

  somar(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

}

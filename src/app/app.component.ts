import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'UM TÍTULO QUALQUER';
  outraVariavel = 2020;

  informacaoParaDataBinding = 'INFORMACAO PASSADO PELO APP.COMPONENT';

  constructor() {
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.title = 'MUDEI A VARIAVEL TITLE!!!!!!!!!';
      this.outraVariavel = 10;
    }, 3000);

    setTimeout(function() {
      console.log('rodei')
      this.title = 'MUDEI A VARIAVEL TITLE!!!!!!!!!';
      this.outraVariavel = 10;
    }, 3000);
  }

  funcao = function() {
    console.log('poderia ser assim');
  }

  arrowFunctiomn = () => {
    console.log('poderia ser assim tbm');
  }

  funcaoPequenininha = () => 3;

  minhaPrimeiraFuncao() {
    return 'um valor' ;
  }

  somar(numero1, numero2) {
    return numero1 + numero2;
  }

  botaoClicado() {
    console.log('AppComponent: Botao foi clicado!')
  }

}

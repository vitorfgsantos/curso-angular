import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/curso-angular-diretivas/master/images';

  exibir = true;
  carregando = true;

  variavel: string = 'texto';

  listaFrutas = [
    'Banana',
    'Maçã',
    'Pastel',
    'Churrasco',
    'Pizza',
  ];

  listaCarros = [{
    placa: 'ABC-1234',
    cor: 'Branco'
  }, {
    placa: 'LKA-4853',
    cor: 'Azul'
  }, {
    placa: 'YEU-3442',
    cor: 'Branco'
  }, {
    placa: 'ABC-1234',
    cor: 'Verde'
  }];

  listaCarrosBrancos = [];

  constructor() {
    this.listaCarrosBrancos = this.carrosBrancos();

    this.carregarInformacoes();
  }

  trocarExibir() {
    this.exibir = !this.exibir;
  }

  carregarInformacoes() {
    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
    }, 3000);
  }

  carrosBrancos() {
    console.log('Passou por aqui');
    return this.listaCarros.filter(carro => {
      return carro.cor === 'Branco';
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent implements OnInit {

  exibir = true;
  carregando = true;

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
    console.log('!!!!!!!!passou aqui')
    this.listaCarrosBrancos = this.carrosBrancos();
  }

  ngOnInit() {
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

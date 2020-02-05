import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss']
})
export class ExercicioNgclassComponent implements OnInit, OnChanges {

  @ViewChild('meuInput', {
    static: true,
  }) meuInput: ElementRef;

  classeASerUtilizada = 'verde';
  deveSerVerde = true;

  valorSelecionado: string;


  classeUsuario = 'verde';

  ngOnInit() {
    console.log('componente iniciou!!!!');
  }

  ngOnChanges() {
    console.log('ALGO MUDOU!!!');
  }

  classe() {
    return this.classeASerUtilizada;
  }

  exibir() {
    console.log(this.meuInput);
  }

}

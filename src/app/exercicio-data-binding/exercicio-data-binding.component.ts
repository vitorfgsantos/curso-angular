import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Output() botaoClicado = new EventEmitter();
  @Input() informacao: string;

  valorDoInput = 'TESTANDO 123';
  imagemURL = 'https://img.freepik.com/fotos-gratis/arvore-3d-contra-um-ceu-do-por-do-sol_1048-9754.jpg?size=626&ext=jpg';

  textoAcessivel = 'Aqui seria meu texto acessível';

  constructor() { }

  ngOnInit() {
  }

  onBotaoClique(evento) {
    console.log('CLICOU EM MIM!!!!!!!!!');
    console.log(evento);


    this.botaoClicado.emit(evento);
  }

  digitouAlgo(evento: KeyboardEvent) {
    this.valorDoInput = (evento.target as HTMLInputElement).value;

    console.log('DIGITOU', evento);
  }

  passouMouse() {
    console.log('PASSOU O MOUSE')
  }

}

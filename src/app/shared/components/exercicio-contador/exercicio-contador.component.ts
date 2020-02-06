import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent implements OnInit {

  @Input() valor: number;
  @Output() valorChange = new EventEmitter();
  // @Output() atualizouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementar() {
    this.valor = this.valor + 1;
    this.valorChange.emit(this.valor);
    // this.atualizouValor.emit(this.valor);
  }

  decrementar() {
    this.valor = this.valor - 1;
    this.valorChange.emit(this.valor);
    // this.atualizouValor.emit(this.valor);
  }

}

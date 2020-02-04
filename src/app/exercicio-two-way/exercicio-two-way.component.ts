import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-two-way',
  templateUrl: './exercicio-two-way.component.html',
  styleUrls: ['./exercicio-two-way.component.scss']
})
export class ExercicioTwoWayComponent implements OnInit {

  @Input() valorString: string;
  @Output() valorStringChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onDigitou(event) {
    console.log(event.target.value);
    this.valorStringChange.emit(event.target.value);
  }

}

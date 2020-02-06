import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
  providers: [
    DatePipe,
    DecimalPipe,
  ]
})
export class ExercicioPipesComponent implements OnInit {

  valorMonetario = 3000;
  data = new Date();

  filme = {
    titulo: 'Harry Potter e a câmara secreta',
    estrelas: 3.523723,
    precoAluguel: 12.99,
    dataLancamento: new Date(2019, 12, 30),
  };

  compras = [{
    produto: 'lâmpadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    peso: 29.33333,
    quantidade: 2,
    data: new Date(2020, 1, 10, 19, 30),
  }];

  constructor(
    private datePripe: DatePipe,
    private decimalPipe: DecimalPipe,
  ) {}

  ngOnInit() {
    const variavel = this.datePripe.transform(new Date(), 'fullDate');
    console.log('DatePipe sendo utilizado no Template: ', variavel);
  }

  getPesoFormatado(peso) {
    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';
  }

}

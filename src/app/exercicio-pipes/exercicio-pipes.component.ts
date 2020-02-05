import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  valorMonetario = 3000;
  data = new Date();

  filme = {
    titulo: 'Harry Potter e a câmara secreta',
    estrelas: 3.523723,
    precoAluguel: 12.99,
    dataLancamento: new Date(2019, 12, 30),
  };

}

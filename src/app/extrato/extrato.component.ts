import { Component, OnInit } from '@angular/core';
import { delay, finalize, take } from 'rxjs/operators';

import { Transferencia } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: Array<Transferencia>;
  estaCarregando: boolean;

  constructor(
    private extratoService: ExtratoService,
  ) { }

  ngOnInit() {
    this.estaCarregando = true;
    this.extratoService.getExtrato()
      .pipe(
        // tap(resposta => console.log('passoiu por aqui')),
        delay(2000),
        take(1),
        finalize(() => {
          this.estaCarregando = false;
        }),
      )
      .subscribe(response => {
        this.extrato = response;
      });
  }

}

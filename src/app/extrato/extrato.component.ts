import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  page = 1;

  constructor(
    private extratoService: ExtratoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.extratoService.getExtrato(this.page)
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

  irParaDetalhes(idTransacao: string) {
    // this.router.navigate(['extrato/transacoes/', idTransacao]);
    this.router.navigate([`extrato/transacoes/${idTransacao}`]);
  }

  proximaPagina() {
    this.page = this.page + 1;
    this.carregarExtrato();
  }

}

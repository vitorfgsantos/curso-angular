import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

import { Transferencia } from '../extrato.interfaces';
import { ExtratoService } from '../extrato.service';

@Component({
  selector: 'app-detalhe-transacao',
  templateUrl: './detalhe-transacao.component.html',
  styleUrls: ['./detalhe-transacao.component.scss']
})
export class DetalheTransacaoComponent implements OnInit {

  transacao: Transferencia;
  estaCarregando: boolean;

  constructor(
    private route: ActivatedRoute,
    private extratoService: ExtratoService,
  ) { }

  ngOnInit() {
    const idTransacao = this.route.snapshot.paramMap.get('idTransacao');
    this.getTransferenciaPorId(idTransacao);
  }

  getTransferenciaPorId(idTransacao) {
    this.estaCarregando = true;
    this.extratoService.getTransferenciaPorId(idTransacao)
      .pipe(
        delay(2000),
      )
      .subscribe(response => {
        this.transacao = response;
        this.estaCarregando = false;
      });
  }

}

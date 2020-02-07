import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-transacao',
  templateUrl: './detalhe-transacao.component.html',
  styleUrls: ['./detalhe-transacao.component.scss']
})
export class DetalheTransacaoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const idTransacao = this.route.snapshot.paramMap.get('idTransacao');
    console.log(idTransacao);
  }

}

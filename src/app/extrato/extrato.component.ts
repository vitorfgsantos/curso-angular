import { Component, OnInit } from '@angular/core';

import { Transferencia } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: Transferencia[];
  
  constructor(
    private extratoService: ExtratoService,
  ) { }

  ngOnInit() {
    this.extratoService.getExtrato()
      .then(response => {
        this.extrato = response;
      });
  }

}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetalheTransacaoComponent } from './detalhe-transacao/detalhe-transacao.component';
import { ExtratoRoutingModule } from './extrato-routing.module';
import { ExtratoComponent } from './extrato.component';


@NgModule({
  declarations: [
    ExtratoComponent,
    DetalheTransacaoComponent,
  ],
  imports: [
    CommonModule,
    ExtratoRoutingModule
  ]
})
export class ExtratoModule { }

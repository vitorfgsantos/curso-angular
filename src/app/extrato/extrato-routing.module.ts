import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheTransacaoComponent } from './detalhe-transacao/detalhe-transacao.component';
import { ExtratoComponent } from './extrato.component';


const routes: Routes = [{
  path: '',
  component: ExtratoComponent,
}, {
  path: 'transacoes/:idTransacao',
  component: DetalheTransacaoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtratoRoutingModule { }

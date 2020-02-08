import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheTransacaoComponent } from './extrato/detalhe-transacao/detalhe-transacao.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado.guard';
import { TransferenciasComponent } from './transferencias/transferencias.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: 'extrato',
  component: ExtratoComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'extrato/transacoes/:idTransacao',
  component: DetalheTransacaoComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'transferencias',
  component: TransferenciasComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'nao-encontrado',
  component: NaoEncontradoComponent,
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: '**',
  redirectTo: 'nao-encontrado',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

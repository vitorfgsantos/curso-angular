import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado.guard';
import { TransferenciasComponent } from './transferencias/transferencias.component';


const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: 'extrato',
  loadChildren: () => import('./extrato/extrato.module').then(m => m.ExtratoModule),
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

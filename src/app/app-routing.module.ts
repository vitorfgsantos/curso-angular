import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'extrato',
  component: ExtratoComponent,
}, {
  path: 'transferencias',
  component: TransferenciasComponent,
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

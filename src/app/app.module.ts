import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ExercicioContadorComponent } from './shared/components/exercicio-contador/exercicio-contador.component';
import { ExercicioDataBindingComponent } from './shared/components/exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretivasComponent } from './shared/components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './shared/components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './shared/components/exercicio-pipes/exercicio-pipes.component';
import { ExercicioTwoWayComponent } from './shared/components/exercicio-two-way/exercicio-two-way.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExercicioDataBindingComponent,
    ExercicioContadorComponent,
    ExercicioTwoWayComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
    ExtratoComponent,
    LoginComponent,
    TransferenciasComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{
      provide: LOCALE_ID,
      useValue: 'pt'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

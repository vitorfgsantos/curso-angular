import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Transferencia } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getExtrato(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.API_URL + '/transacoes');
    // return this.http.get<Transferencia[]>(this.API_URL + '/transacoes').toPromise();
    // return this.http.get(`${this.API_URL}/transacoes`).toPromise();
  }

}

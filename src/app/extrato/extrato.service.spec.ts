import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { ExtratoService } from './extrato.service';

describe('ExtratoService', () => {

  const mock = [{
    id: 1,
    data: '2020-02-04T13:00:24.744Z',
    descricao: 'Salário',
    valor: 3500,
    categoria: 'Salário'
  }];

  let httpTestingController: HttpTestingController;
  let service: ExtratoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ExtratoService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve obter a lista de transferências com sucesso', done => {
    service.getExtrato(1)
      .subscribe(response => {
        expect(response).toEqual(mock);
        done();
      });

    const req = httpTestingController.expectOne(environment.API_URL + '/transacoes?_page=1');
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });

  it('deve obter os detalhes de uma transferência com sucesso', done => {
    service.getTransferenciaPorId(1)
      .subscribe(response => {
        expect(response).toEqual(mock[0]);
        done();
      });

    const req = httpTestingController.expectOne(environment.API_URL + '/transacoes/1');
    expect(req.request.method).toEqual('GET');
    req.flush(mock[0]);
  });

});

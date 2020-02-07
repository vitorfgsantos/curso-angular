import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheTransacaoComponent } from './detalhe-transacao.component';

describe('DetalheTransacaoComponent', () => {
  let component: DetalheTransacaoComponent;
  let fixture: ComponentFixture<DetalheTransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheTransacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

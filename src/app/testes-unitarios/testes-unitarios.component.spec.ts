import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesUnitariosComponent } from './testes-unitarios.component';

describe('TestesUnitariosComponent', () => {
  let component: TestesUnitariosComponent;
  let fixture: ComponentFixture<TestesUnitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestesUnitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesUnitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deve somar dois números', () => {
    const resultado = component.somar(2, 2);
    expect(resultado).toEqual(4);
  });


});

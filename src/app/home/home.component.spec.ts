import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AuthService } from '../shared/services/auth.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const authServiceStub = {
      getUsuario: () => ({
        nome: 'Mock',
      })
    };

    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        RouterTestingModule,
        ModalModule.forRoot(),
      ],
      providers: [{
        provide: AuthService,
        useValue: authServiceStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o modal quando o botão for clicado', () => {
    const modalSpy = spyOn(component, 'openModal');
    const element = fixture.nativeElement.querySelector('button');
    element.click();
    expect(modalSpy).toHaveBeenCalled();
  });

});

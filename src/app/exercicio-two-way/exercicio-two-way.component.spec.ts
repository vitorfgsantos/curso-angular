import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTwoWayComponent } from './exercicio-two-way.component';

describe('ExercicioTwoWayComponent', () => {
  let component: ExercicioTwoWayComponent;
  let fixture: ComponentFixture<ExercicioTwoWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioTwoWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

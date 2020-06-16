import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcesosActuacionesPage } from './procesos-actuaciones.page';

describe('ProcesosActuacionesPage', () => {
  let component: ProcesosActuacionesPage;
  let fixture: ComponentFixture<ProcesosActuacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesosActuacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesosActuacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

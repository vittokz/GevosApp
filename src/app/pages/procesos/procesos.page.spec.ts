import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcesosPage } from './procesos.page';

describe('ProcesosPage', () => {
  let component: ProcesosPage;
  let fixture: ComponentFixture<ProcesosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

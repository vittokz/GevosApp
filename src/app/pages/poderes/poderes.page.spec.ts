import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoderesPage } from './poderes.page';

describe('PoderesPage', () => {
  let component: PoderesPage;
  let fixture: ComponentFixture<PoderesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoderesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoderesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThetablePage } from './thetable.page';

describe('ThetablePage', () => {
  let component: ThetablePage;
  let fixture: ComponentFixture<ThetablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThetabledetailPage } from './thetabledetail.page';

describe('ThetabledetailPage', () => {
  let component: ThetabledetailPage;
  let fixture: ComponentFixture<ThetabledetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetabledetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThetabledetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

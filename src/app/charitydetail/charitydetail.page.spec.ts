import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharitydetailPage } from './charitydetail.page';

describe('CharitydetailPage', () => {
  let component: CharitydetailPage;
  let fixture: ComponentFixture<CharitydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitydetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharitydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

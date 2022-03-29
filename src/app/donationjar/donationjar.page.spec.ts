import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonationjarPage } from './donationjar.page';

describe('DonationjarPage', () => {
  let component: DonationjarPage;
  let fixture: ComponentFixture<DonationjarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationjarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonationjarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

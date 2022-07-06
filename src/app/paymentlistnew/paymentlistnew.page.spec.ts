import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentlistnewPage } from './paymentlistnew.page';

describe('PaymentlistnewPage', () => {
  let component: PaymentlistnewPage;
  let fixture: ComponentFixture<PaymentlistnewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentlistnewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentlistnewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

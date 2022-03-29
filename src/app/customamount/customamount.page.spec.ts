import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomamountPage } from './customamount.page';

describe('CustomamountPage', () => {
  let component: CustomamountPage;
  let fixture: ComponentFixture<CustomamountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomamountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomamountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

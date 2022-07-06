import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddamountPage } from './addamount.page';

describe('AddamountPage', () => {
  let component: AddamountPage;
  let fixture: ComponentFixture<AddamountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddamountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddamountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

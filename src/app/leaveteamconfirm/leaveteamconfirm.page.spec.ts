import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveteamconfirmPage } from './leaveteamconfirm.page';

describe('LeaveteamconfirmPage', () => {
  let component: LeaveteamconfirmPage;
  let fixture: ComponentFixture<LeaveteamconfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveteamconfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveteamconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

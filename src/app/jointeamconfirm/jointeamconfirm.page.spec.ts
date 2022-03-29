import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JointeamconfirmPage } from './jointeamconfirm.page';

describe('JointeamconfirmPage', () => {
  let component: JointeamconfirmPage;
  let fixture: ComponentFixture<JointeamconfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointeamconfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JointeamconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

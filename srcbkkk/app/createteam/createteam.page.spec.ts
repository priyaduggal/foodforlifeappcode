import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateteamPage } from './createteam.page';

describe('CreateteamPage', () => {
  let component: CreateteamPage;
  let fixture: ComponentFixture<CreateteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateteamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

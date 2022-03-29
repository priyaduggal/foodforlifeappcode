import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialshareoptionsPage } from './socialshareoptions.page';

describe('SocialshareoptionsPage', () => {
  let component: SocialshareoptionsPage;
  let fixture: ComponentFixture<SocialshareoptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialshareoptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialshareoptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

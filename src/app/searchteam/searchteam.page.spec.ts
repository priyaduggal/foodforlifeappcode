import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchteamPage } from './searchteam.page';

describe('SearchteamPage', () => {
  let component: SearchteamPage;
  let fixture: ComponentFixture<SearchteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchteamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

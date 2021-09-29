import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowcardsPage } from './showcards.page';

describe('ShowcardsPage', () => {
  let component: ShowcardsPage;
  let fixture: ComponentFixture<ShowcardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamdetailsPage } from './teamdetails.page';

describe('TeamdetailsPage', () => {
  let component: TeamdetailsPage;
  let fixture: ComponentFixture<TeamdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

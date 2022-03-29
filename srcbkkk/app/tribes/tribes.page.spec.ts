import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TribesPage } from './tribes.page';

describe('TribesPage', () => {
  let component: TribesPage;
  let fixture: ComponentFixture<TribesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TribesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

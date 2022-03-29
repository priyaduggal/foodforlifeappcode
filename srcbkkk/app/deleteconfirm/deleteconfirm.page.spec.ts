import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteconfirmPage } from './deleteconfirm.page';

describe('DeleteconfirmPage', () => {
  let component: DeleteconfirmPage;
  let fixture: ComponentFixture<DeleteconfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteconfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

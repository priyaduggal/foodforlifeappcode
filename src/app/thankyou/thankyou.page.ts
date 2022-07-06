import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {

  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }
dismiss()
	{
	 this.modalController.dismiss({
      'dismissed': true
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-donationjar',
  templateUrl: './donationjar.page.html',
  styleUrls: ['./donationjar.page.scss'],
})
export class DonationjarPage implements OnInit {

  constructor(public modalController: ModalController)  { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}

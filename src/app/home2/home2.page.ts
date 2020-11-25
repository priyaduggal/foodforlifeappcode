import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DonationjarPage } from '../donationjar/donationjar.page';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor(public modalController: ModalController) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: DonationjarPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}

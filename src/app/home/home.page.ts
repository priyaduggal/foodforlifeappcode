import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { DonationjarPage } from '../donationjar/donationjar.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 // @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor(public modalController: ModalController)  { }
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

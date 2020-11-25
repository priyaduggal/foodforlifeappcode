import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddamountPage } from '../addamount/addamount.page';
@Component({
  selector: 'app-thetabledetail',
  templateUrl: './thetabledetail.page.html',
  styleUrls: ['./thetabledetail.page.scss'],
})
export class ThetabledetailPage implements OnInit {
slideOpts = {
	slidesPerView: 3,
	centeredSlides: true,
	 spaceBetween: 10,
    initialSlide: 1,
    speed: 400
  };
  constructor(public modalController: ModalController) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddamountPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}

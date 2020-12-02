import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddamountPage } from '../addamount/addamount.page';
import {ApiService } from '../services/api/api.service';
import { config } from '../config';
import {CommonService} from '../common/common.service';
@Component({
  selector: 'app-thetabledetail',
  templateUrl: './thetabledetail.page.html',
  styleUrls: ['./thetabledetail.page.scss'],
})
export class ThetabledetailPage implements OnInit {
list=[];
paymentlist=[];
userid:any;
IMAGES_URL:any = config.IMAGES_URL;
slideOpts = {
	slidesPerView: 3,
	centeredSlides: true,
	 spaceBetween: 10,
    initialSlide: 1,
    speed: 400
  };
  constructor(public modalController: ModalController,public api:ApiService,private common: CommonService) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddamountPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ngOnInit() {
  }
  
  ionViewDidEnter()
  {
	  this.userid=localStorage.getItem('userid');
	  this.getsubscription();
	  this.listpayment();
  }
  listpayment()
  {
	   
		let dict ={
		userid: this.userid,
		};
  	 	this.api.post('ListPayment', dict,'').subscribe((result) => {  
		var res;
		res = result;
		if(res.status==1){
			this.paymentlist=res.data;
			
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
  
  }
  getsubscription()
  {
	  this.common.presentLoading();
		this.api.post('subscriptionlist','','').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.list=res.data;

		}else
		{

		}
		},
		err => {

		});
  }
}

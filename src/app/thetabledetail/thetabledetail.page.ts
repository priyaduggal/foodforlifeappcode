import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddamountPage } from '../addamount/addamount.page';
import { CustomamountPage } from '../customamount/customamount.page';
import {ApiService } from '../services/api/api.service';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-thetabledetail',
  templateUrl: './thetabledetail.page.html',
  styleUrls: ['./thetabledetail.page.scss'],
})
export class ThetabledetailPage implements OnInit {
list=[];
paymentlist=[];
days:any;
userid:any;
planid:any;
cardid:any;
errors:any=['',null,undefined];
IMAGES_URL:any = config.IMAGES_URL;
slideOpts = {
	slidesPerView: 3,
	centeredSlides: true,
	 spaceBetween: 10,
    initialSlide: 1,
    speed: 400
  };
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(public modalController: ModalController,public api:ApiService,private common: CommonService) { }
  async addamount() {

	  const modal = await this.modalController.create({
		component: CustomamountPage,
		cssClass: 'leaveteam',
		componentProps: {
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
			$('#amountval').val(detail.data.data);
			$('#amount').text(detail.data.data);
			$('.amount_day').addClass('active_plan');
			
		}
       });
    return await modal.present();
  }
  cardno(id)
	{
		this.cardid=id;
	}
  subs()
  {
	  if(this.errors.indexOf(this.cardid)>=0)
	  {
		  this.common.presentToast('Please select card','danger');
		  return false;
	  }
	  
	  if(this.errors.indexOf(this.days)>=0 && this.errors.indexOf($('#amountval').val())>=0)
	  {
		  this.common.presentToast('Please select plan or add amount','danger');
		  return false;
	  }
	  
	   if(this.errors.indexOf(this.days)==-1)
	  {
		  this.common.presentToast('Subscribed Successfully','success');
		  this.api.navCtrl.navigateRoot('tabs/home');
		  
	  }
	  
	    if(this.errors.indexOf($('#amountval').val())==-1)
	  {
		  this.common.presentToast('Subscribed Successfully','success');
		  this.api.navCtrl.navigateRoot('tabs/home');
		  
	  }
	  
	  
	  
	  
  }
  selectwekk(event,day)
  {
	  
		if ($.inArray(day, this.days) >= 0) {
		var carIndex = this.days.indexOf(day);
		this.days='';
		$('.day').removeClass('active_plan');
		}else {
		$('.day').removeClass('active_plan');
		this.days='';
		this.days=day;
		$('.day'+day).addClass('active_plan');
		}
  }
  ngOnInit() {
  }
  type1(type,id)
  {
	  
  }
  select(id)
  {
	this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show){ 
		
      this.buttonName = "Hide";
	   $('.plans_list'+id).addClass("active_plan");
    }else{
      this.buttonName = "Show";
      $('.plans_list'+id).removeClass("active_plan");
	}
	  this.planid=id;
	  
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

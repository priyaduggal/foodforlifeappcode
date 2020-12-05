import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';
import { PaymentlistmodalPage } from '../paymentlistmodal/paymentlistmodal.page';
@Component({
  selector: 'app-addamount',
  templateUrl: './addamount.page.html',
  styleUrls: ['./addamount.page.scss'],
})
export class AddamountPage implements OnInit {
charityid:any;
charity:any;
search_text:any;
userid:any;
IMAGES_URL:any = config.IMAGES_URL;
errors:any=['',null,undefined];
minimum:any;
timeout=null;
  constructor(public navParams: NavParams,public api:ApiService,public router:Router,private common: CommonService,public modalController: ModalController) {
	this.charityid = navParams.get('id');
	//alert(this.charityid);
	  }

  ngOnInit() {
  }
  search_keyword(event)
  {  
   clearTimeout(this.timeout);
	 var self = this;
      this.timeout = setTimeout(function () {
		  if(self.errors.indexOf(event.target.value)==-1){
			  self.search_text=event.target.value;
			  self.minimum=25;
			  if(self.search_text < self.minimum)
			  {
				  self.common.presentToast('Minimum donation is 25 cents !.','danger');
				  self.search_text='';
				  $('#amount').val('');
			  }
			  var tot=self.search_text % self.minimum;
			  if(tot==0)
			  {
			  }else
			  {
				  var min=self.search_text-tot;
				   $('#amount').val(min); 
				   
				   self.common.presentToast('We have rounded the amount entered to the nearest number of meals','success');
			  }
			  var val=$('#amount').val();
			  var tot1=val / self.minimum;
			  $('.no_meals').text(tot1);
			   console.log(self.search_text);
		  }
		 else{
			 self.search_text=event.target.value;
			  $('.no_meals').text('0');
			  //self.save1();  
		  }
    }, 500);
  }
  dismiss() {
   this.modalController.dismiss({
      'dismissed': true
    });
  }
   ionViewDidEnter()
   {
	this.Charitydetail();
	this.userid=localStorage.getItem('userid');
   }
   async confirm()
   {
	   this.dismiss();
	    const modal = await this.modalController.create({
		component: PaymentlistmodalPage,
		cssClass: 'leaveteam',
		componentProps: {
		charityid: this.charityid,
		amount:$('#amount').val(),
		userid:this.userid
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		//this.team.joins=this.team.joins - 1;
		//this.getuserteams();
		}
		});
    return await modal.present();
   }
   Charitydetail()
   {
	   	let dict ={
		id: this.charityid,
		};
		this.common.presentLoading();
		this.api.post('charitydetail', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.charity=res.data;
		//this.images=res.images;
		}else
		{

		}
		},
		err => {

		});
	   
   }
}

import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';
import { PaymentlistmodalPage } from '../paymentlistmodal/paymentlistmodal.page';
@Component({
  selector: 'app-customamount',
  templateUrl: './customamount.page.html',
  styleUrls: ['./customamount.page.scss'],
})
export class CustomamountPage implements OnInit {
charityid:any;
charity:any;
search_text:any;
team:any;
userid:any;
actid:any;
teamid:any;
IMAGES_URL:any = config.IMAGES_URL;
errors:any=['',null,undefined];
minimum:any;
timeout=null;
act:any;
  constructor(public navParams: NavParams,public api:ApiService,public router:Router,private common: CommonService,public modalController: ModalController) { }

  ngOnInit() {
  }
   search_keyword(event)
  {  
   clearTimeout(this.timeout);
	 var self = this;
      this.timeout = setTimeout(function () {
		  if(self.errors.indexOf(event.target.value)==-1){
			  self.search_text=event.target.value;
			  self.minimum=1;
			  if(self.search_text < self.minimum)
			  {
				  self.common.presentToast('Minimum donation is 1 dollar !.','danger');
				  self.search_text='';
				  $('#amount1').val('');
			  }
			  var tot=self.search_text % self.minimum;
			  if(tot==0)
			  {
			  }else
			  {
				  var min=self.search_text-tot;
				   $('#amount1').val(min); 
				   
				   self.common.presentToast('We have rounded the amount entered to the nearest number of meals','success');
			  }
			  var val=$('#amount1').val();
			  var tot1=val / 1;
			  $('.no_meals').text(tot1);
			   console.log(self.search_text);
		  }
		 else{
			 self.search_text=event.target.value;
			  $('.no_meals').text('0');
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
	
	this.userid=localStorage.getItem('userid');
   }
    async confirm()
   {
	   if(this.errors.indexOf($('#amount1').val())>=0)
		{
			this.common.presentToast('Please enter amount !','danger');
			return false;
		}
	   this.dismiss1('data');
   }
   dismiss1(data)
   {
	    this.modalController.dismiss({
      'data': $('#amount1').val()
    });
   }
  

}

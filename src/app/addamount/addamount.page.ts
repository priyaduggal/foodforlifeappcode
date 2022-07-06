import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';
import { PaymentlistnewPage } from '../paymentlistnew/paymentlistnew.page';
import { PaymentlistmodalPage } from '../paymentlistmodal/paymentlistmodal.page';
import { AddcardPage } from '../addcard/addcard.page';

@Component({
  selector: 'app-addamount',
  templateUrl: './addamount.page.html',
  styleUrls: ['./addamount.page.scss'],
})
export class AddamountPage implements OnInit {
charityid:any;
charity:any;
search_text:any;
team:any;
totalcents:any;
userid:any;
actid:any;
teamid:any;
paymentlist:any=[];
IMAGES_URL:any = config.IMAGES_URL;
errors:any=['',null,undefined];
minimum:any;
timeout=null;
status:any;
act:any;
planid:any;
cardid:any;
action:any;
  constructor(public navParams: NavParams,public api:ApiService,
  public router:Router,private common: CommonService,public modalController: ModalController) {
	this.charityid = navParams.get('id');
	this.actid = navParams.get('actid');
	this.teamid = navParams.get('teamid');
	this.status = navParams.get('status');
	this.planid = navParams.get('day');
	this.action = navParams.get('action');
	
	
}
async confirmsubscription(){
	
	 if(this.errors.indexOf(this.cardid)>=0 )
	{
        this.common.presentToast('Please select card !.','danger');
		return false;
	}else{
		this.dismiss();
		 const modal = await this.modalController.create({
		component: PaymentlistnewPage,
		cssClass: 'leaveteam',
		componentProps: {
		planid:this.planid,
		cardid:this.cardid,
		userid:this.userid,
		action:this.action
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		}
		});
    return await modal.present();
	}
	
}
cardno(id)
	{
		this.cardid=id;
		
	}
  ngOnInit() {
  }
  async addpayment(){
	    const modal = await this.modalController.create({
		component: AddcardPage,
		cssClass: 'leaveteam',
		componentProps: {
		actid:this.actid,
		amount:$('#amount').val(),
		userid:this.userid
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
			this.listpayment();
		}
		});
    return await modal.present(); 
  }
  listpayment()
  {
	  if(this.errors.indexOf(this.userid)>=0 )
	{
		
        this.common.presentToast('Please login first!.','danger');
		return false;
	}
		let dict ={
		userid: this.userid,
		};
        this.common.presentLoading();
  	 	this.api.post('ListPayment', dict,'').subscribe((result) => {  
		this.common.stopLoading();
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
			 
			//  var tot1=val * 4;
			  
			  var mul=val * 100;
			  var tot1=mul / self.totalcents;
			
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
	if(this.errors.indexOf(this.charityid)==-1)
	{
	this.Charitydetail();
	}
	
	if(this.errors.indexOf(this.teamid)==-1)
	{
	this.teamdetails();
	}
	
	if(this.errors.indexOf(this.actid)==-1)
	{
	this.actdetail();
	}
	this.getsettings();
	this.userid=localStorage.getItem('userid');
	this.listpayment();
   }
   getsettings()
   {
	 this.api.post('getadsettings', '','').subscribe((result) => {  
		var res;
		res = result;
		if(res.status==1){
		this.totalcents=res.data.totalcents;	
		//alert(this.totalcents);
		
		}else
		{
		}
        },
        err => {
             
        });     
   }
   async confirm_act()
    {
		if(this.errors.indexOf($('#amount').val())>=0)
		{
			this.common.presentToast('Please enter amount !','danger');
			return false;
		}
		
	    this.dismiss();
	    const modal = await this.modalController.create({
		component: PaymentlistmodalPage,
		cssClass: 'leaveteam',
		componentProps: {
		actid:this.actid,
		amount:$('#amount').val(),
		userid:this.userid
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		}
		});
    return await modal.present();
	   
   }
   async confirm_team()
   {
	   if(this.errors.indexOf($('#amount').val())>=0)
		{
			this.common.presentToast('Please enter amount !','danger');
			return false;
		}
	    this.dismiss();
	    const modal = await this.modalController.create({
		component: PaymentlistmodalPage,
		cssClass: 'leaveteam',
		componentProps: {
		teamid: this.teamid,
		amount:$('#amount').val(),
		userid:this.userid
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		}
		});
    return await modal.present();
	   
   }
   async confirm_in()
   {
	    if(this.errors.indexOf($('#amount').val())>=0)
		{
			this.common.presentToast('Please enter amount !','danger');
			return false;
		}
	    this.dismiss();
	    const modal = await this.modalController.create({
		component: PaymentlistmodalPage,
		cssClass: 'leaveteam',
		componentProps: {
		amount:$('#amount').val(),
		userid:this.userid
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		}
		});
    return await modal.present();
	   
   }
   async confirm()
   {
	   if(this.errors.indexOf($('#amount').val())>=0)
		{
			this.common.presentToast('Please enter amount !','danger');
			return false;
		}
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
   teamdetails()
    {
	   	let dict ={
		id: this.teamid,
		};
		//this.common.presentLoading();
		this.api.post('teamdetail', dict,'').subscribe((result) => {  
		//this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.team=res.data;
		}else
		{

		}
		},
		err => {

		});
	    
   }
   actdetail()
   {
	   	let dict ={
		id: this.actid,
		};
		//this.common.presentLoading();
		this.api.post('activitydetail', dict,'').subscribe((result) => {  
		//this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.act=res.data;
		
		}else
		{

		}
		},
		err => {

		});
	    
   }
   Charitydetail()
   {
	   	let dict ={
		id: this.charityid,
		};
		//this.common.presentLoading();
		this.api.post('charitydetail', dict,'').subscribe((result) => {  
		//this.common.stopLoading();
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

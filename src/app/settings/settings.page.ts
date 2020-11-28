import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
paymentlist=[];
settings:any;
userid:any;
how_often:any;
what_time:any;
what_donate:any;
no_meals:any;
my_profile:any;
errors:any=['',null,undefined];
public SetRemainder: boolean;
public PushNotification: boolean;
  constructor(public api:ApiService, public router:Router,private common: CommonService) {
this.SetRemainder = false;	  }

  ngOnInit() {
  }
  PushNotificationfun(event)
  {
	  this.PushNotification=event;
	  this.save();
  }
  notifyAndUpdateIsToggled(event)
  {
	  this.SetRemainder=event;
	  this.save();
  }
  myprofile(type)
  {
	   this.my_profile=type;
	   this.save();
  }
  whatdonate(type)
  {
	   this.what_donate=type;
	   this.save();
  }
  whattime(type)
  {
	   this.what_time=type;
	   this.save();
  }
  noofmeals(type)
  {
	  this.no_meals=type;
	  this.save();
  }
  howoften(type)
  {
	  this.how_often=type;
	  this.save();
  }
  logout()
  {
	   localStorage.clear();
this.router.navigate(["/"]);
  }
  save()
  {
		let dict={
		userid:this.userid,
		set_remainder:this.SetRemainder,
		how_often:this.how_often,
		what_time:this.what_time,
		push_notification:this.PushNotification,
		when_i_donate:this.what_donate,
		no_of_meals:this.no_meals,
		my_profile:this.my_profile,
		};
		this.api.post('saveSettings', dict,'').subscribe((result) => { 
		var res;
		res = result;
		if(res.status==1){
			this.common.presentToast(res.message,'success');
		}else
		{
			this.common.presentToast(res.message,'danger');
		}
		},
		err => {

		});

  }
  ionViewDidEnter(){
  this.userid=localStorage.getItem('userid');
  this.listpayment();
  this.getsettings();
  
  }
  getsettings()
  {
		let dict ={
		userid: this.userid,
		};
  	 	this.api.post('Getsettings', dict,'').subscribe((result) => {  
	    var res;
		res = result;
		if(res.status==1){
			this.settings=res.data;
			
			if(this.errors.indexOf(this.settings)==-1)
			{
				this.SetRemainder=this.settings.set_remainder;
				this.PushNotification=this.settings.push_notification;
				this.how_often=this.settings.how_often;
				this.what_time=this.settings.what_time;
				this.what_donate=this.settings.when_i_donate;
				this.no_meals=this.settings.no_of_meals;
				this.my_profile=this.settings.my_profile;
			}
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        }); 
  }
  listpayment()
  {
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
}

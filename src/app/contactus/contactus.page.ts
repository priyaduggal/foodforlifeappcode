import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
is_submit:boolean=false;
name:any;
email:any;
message:any;
reg_exp:any;
phone:any;
errors:any=['',null,undefined];
  constructor(private fb: Facebook,
   private googlePlus: GooglePlus,
   private globalFooService: GlobalFooService, 
   public api:ApiService, public router:Router,
   private common: CommonService) { 
  this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

}

  ngOnInit() {
  }
  save()
  {
  	  this.is_submit = true;
  	   if(this.errors.indexOf(this.name) >= 0 ||
  	    !this.reg_exp.test(String(this.email).toLowerCase()) ||
  	     this.errors.indexOf(this.email) >= 0||
  	      this.errors.indexOf(this.phone) >= 0||
  	       this.errors.indexOf(this.message) >= 0
  	     ){
      return false;
    }else
    {
		let dict ={
		name: this.name,
		email: this.email,
		phone: this.phone,
		message: this.message,
		};

		this.common.presentLoading();
		this.api.post('contactUs', dict,'').subscribe((result) => {  
		this.is_submit = false;
		this.common.stopLoading();
		this.name = '';
		this.email = '';
		this.phone = '';
		this.message = '';
		var res;
		res = result;
		if(res.status==1){
			
			this.common.presentToast('Saved Successfully !.','success');
		}else
		{
			this.common.presentToast(res.message,'danger');
		}
        },
        err => {
        });
    }
  }

}

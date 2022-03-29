import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
otpid:any;
otp:any;
input1:any
input2:any;
input3:any;
input4:any;
type_login:any;
signup_data:any;
errors:any=['',null,undefined];
  constructor(public api:ApiService, public router:Router,private common: CommonService) { }

  ngOnInit() {
  }
  resend()
  {
	  let dict ={
		otpid: this.otpid,
		userid:this.signup_data,
		};
		this.common.presentLoading();
  	 	this.api.post('resendemail', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			localStorage.setItem('otp_verify',res.otp);
		
		this.common.presentToast(res.message,'success');
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
  }
  test(event)
  {
	  $('#two').focus();
  }
   ionViewDidEnter()
  {
	  this.otpid=localStorage.getItem('otp_verify');
	  this.signup_data=localStorage.getItem('signup_data');
	  this.type_login=localStorage.getItem('type_login');
  }
  otpController(event,next,prev){
   if(event.target.value.length < 1 && prev){
     prev.setFocus()
   }
   else if(next && event.target.value.length>0){
     next.setFocus();
   }
   else {
    return 0;
   }
  }
  verify()
  {
	   this.otpid=localStorage.getItem('otp_verify');
    if(this.errors.indexOf(this.input1) >= 0 ||this.errors.indexOf(this.input2) >= 0 ||this.errors.indexOf(this.input3) >= 0 ||this.errors.indexOf(this.input4) >= 0 ){
		this.common.presentToast('Please enter 4 digit OTP!.','danger');
      return false;
    }else{
		
		let dict ={
		otpid: this.otpid,
		otp: this.input1+this.input2+this.input3+this.input4,
		userid:this.signup_data,
		};
		this.common.presentLoading();
  	 	this.api.post('VerifyOtp', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.input1 = '';
		this.input2 = '';
		this.input3 = '';
		this.input4 = '';
		var userId = this.api.encryptData(res.data.id,config.ENC_SALT);
			localStorage.setItem('userid',res.data.id);
			localStorage.setItem('food_token',userId);
			localStorage.setItem('food_first_name',res.data.first_name);
			localStorage.setItem('food_last_name',res.data.last_name);
			localStorage.setItem('food_email',res.data.email);
			localStorage.setItem('food_type',res.data.type);
			localStorage.setItem('is_logged_in_user','true');
		this.router.navigate(['/tabs/home']);
		this.common.presentToast(res.message,'success');
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

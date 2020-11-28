import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
is_submit_register:boolean=false;
reg_exp:any;
signup_email:any;
signup_password:any;
type_login:any;
otp:any;
errors:any=['',null,undefined];
userid:any;
	constructor(public api:ApiService, public router:Router,private common: CommonService) {
	this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	}

  ngOnInit() {
  }
  ionViewDidEnter()
  {
	  this.type_login=localStorage.getItem('type_login');
  }
   signup(){
  
  this.is_submit_register = true;
    if(this.errors.indexOf(this.signup_email) >= 0 ||this.errors.indexOf(this.signup_password) >= 0 || !this.reg_exp.test(String(this.signup_email).toLowerCase())){
      return false;
    }
	  let dict ={
      email: this.signup_email,
      password: this.signup_password,
	  type:this.type_login,
    };
        this.common.presentLoading();
  	 	this.api.post('SignupUser', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.signup_email = '';
		this.signup_password = '';
		this.router.navigate(['/otp']);
		localStorage.setItem('otp_verify',res.otp);
		localStorage.setItem('signup_data',res.data.id);
		this.common.presentToast('OTP for email confirmation has been sent successfully!.','success');
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
  }

}

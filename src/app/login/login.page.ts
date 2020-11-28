import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
is_submit:boolean=false;
is_submit_login:boolean=false;
login_email:any;
forgot_email:any;
reg_exp:any;
otp:any;
errors:any=['',null,undefined];
login_password:any;
  constructor(public api:ApiService, public router:Router,private common: CommonService) {
	this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  ngOnInit() {
  }

  login(){
  this.is_submit_login = true;
    if(this.errors.indexOf(this.login_email) >= 0 || !this.reg_exp.test(String(this.login_email).toLowerCase()) || this.errors.indexOf(this.login_password) >= 0){
      return false;
    }
	  let dict ={
      email: this.login_email,
      password: this.login_password,
    };
		this.common.presentLoading();
		this.api.post('loginUser', dict,'').subscribe((result) => {  
		this.is_submit_login = false;
		this.common.stopLoading();
		this.login_email = '';
		this.login_password = '';
		var res;
		res = result;
		if(res.status==1){
			var userId = this.api.encryptData(res.data.id,config.ENC_SALT);
			localStorage.setItem('userid',res.data.id);
			localStorage.setItem('food_token',userId);
			localStorage.setItem('food_first_name',res.data.first_name);
			localStorage.setItem('food_last_name',res.data.last_name);
			localStorage.setItem('food_email',res.data.email);
			localStorage.setItem('food_type',res.data.type);
			if(res.data.type==1){
			this.router.navigate(['/tabs/home']);
			}else
			{
			this.router.navigate(['/tabs/home2']);
			}
			this.common.presentToast('Logged in successfully !.','success');
		}else
		{
			this.common.presentToast(res.message,'danger');
		}
        },
        err => {
        });
  }
}

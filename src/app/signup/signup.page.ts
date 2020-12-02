import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx'
import { GlobalFooService } from '../services/globalFooService.service';
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
	constructor(private globalFooService: GlobalFooService,private fb: Facebook, private googlePlus: GooglePlus,public api:ApiService, public router:Router,private common: CommonService) {
	this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	}

  ngOnInit() {
  }
  ionViewDidEnter()
  {
	  this.type_login=localStorage.getItem('type_login');
  }
  facebookLogin(){
    
    	this.fb.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => 
	     	this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
	        console.log('profile', profile);     
	        	if(this.errors.indexOf(profile) == -1){
		          	let dict ={
			            first_name: profile['first_name'],
			            //last_name: profile['last_name'],
			            email: profile['email'],
			            password: '',
			            medium: 'facebook',
						type:this.type_login,
			            social_id: profile['id'],
			            image: profile['picture_large']['data']['url']
			        };
	          		console.log('dict', dict);
	          		this.finalSignup(dict); 
			      
        	}else{
          		this.common.presentToast('Error,Please try after some time', 'danger')
        	}
      	})
      	).catch(e => {
          this.common.presentToast( 'Error,Please try after some time', 'danger');
          console.log(e)
      	});
	};



	 //Google social login 
	googleLogin(){
	    console.log(this.googlePlus)
	    this.googlePlus.login({'scopes': 'profile'})
	    .then(profile => {
	      	console.log(profile);
	      	if(this.errors.indexOf(profile) == -1){
	          	let dict ={
		            first_name: profile['displayName'],
		            email: profile['email'],
		            password: '',
		            medium: 'google',
		            social_id: profile['userId'],
					type:this.type_login,
		            image: !profile['imageUrl'] ? '' : profile['imageUrl']
	          	};
	          	console.log('dict', dict);
	         	this.finalSignup(dict);             
	      	}

	    })
	    .catch(err => {
	    	console.error(err)
	    	this.common.presentToast( 'Error,Please try after some time', 'danger');
	    });
	};
	
	
	finalSignup(dict){
	    this.common.presentLoading();
	    // this.fcm.getToken().then(token => {
	    this.api.post('social_login',dict,'').subscribe((result) => {
	      this.common.stopLoading();
		  
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
			localStorage.setItem('profile_pic',res.data.image);
  			this.globalFooService.publishSomeData({
            	foo: {'data': res.data}
        	});
        	this.common.presentToast('Login successfully!', 'success');
	      	this.api.navCtrl.navigateRoot('tabs/home');
	      }
	      else{
	        this.common.presentToast('Error while signing up! Please try later', 'danger');
	      }
	    },
	    err => {
	      this.common.stopLoading();
	        this.common.presentToast('Technical error,Please try after some time', 'danger');
	    });
	    // });
	};
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
  	 	this.api.post('SignupUser',dict,'').subscribe((result) => {  
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

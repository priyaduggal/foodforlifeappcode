import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
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
  constructor(private fb: Facebook,
   private googlePlus: GooglePlus,
   private globalFooService: GlobalFooService, 
   public api:ApiService, public router:Router,
   private common: CommonService) {
	this.reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  ngOnInit() {
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
						type:'',
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
					type:'',
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
			localStorage.setItem('profile_pic',res.data.image);
			this.globalFooService.publishSomeData({
            	foo: {'data': res.data}
			});
			//this.router.navigate(['/tabs/home']);
			this.api.navCtrl.navigateRoot('tabs/home');
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

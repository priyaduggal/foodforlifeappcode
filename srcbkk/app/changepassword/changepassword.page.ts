import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
is_submit:boolean=false;
name:any;
email:any;
message:any;
reg_exp:any;
phone:any;
oldpassword:any;
newpassword:any;
cpassword:any;
errors:any=['',null,undefined];
  constructor(private fb: Facebook,
   private googlePlus: GooglePlus,
   private globalFooService: GlobalFooService, 
   public api:ApiService, public router:Router,
   private common: CommonService) { }

  ngOnInit() {
  }
  
  save(){
	  
	this.is_submit = true;
  	 if(this.errors.indexOf(this.oldpassword) >= 0 ||
  	     this.errors.indexOf(this.newpassword) >= 0||
  	      this.errors.indexOf(this.cpassword) >= 0 ||
		  this.newpassword!=this.cpassword
		  
		  ){
      return false;
    }else
    {
		
		let dict ={
		oldpassword: this.oldpassword,
		password: this.newpassword,
		userid:	localStorage.getItem('userid'),
		};

		this.common.presentLoading();
		this.api.post('changepassword', dict,'').subscribe((result) => {  
		this.is_submit = false;
		this.common.stopLoading();
		this.oldpassword = '';
		this.newpassword = '';
		this.cpassword = '';
		var res;
		res = result;
		if(res.status==1){
			
			this.api.navCtrl.navigateRoot('tabs/settings');
			this.common.presentToast('Password changed successfully !.','success');
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

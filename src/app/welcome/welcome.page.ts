import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { GlobalFooService } from '../services/globalFooService.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
type_login:any;
userid:any;
errors:any=['',null,undefined];
  constructor(private globalFooService: GlobalFooService,public api:ApiService, public router:Router,private common: CommonService) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
	    this.userid=localStorage.getItem('userid');
	    this.type_login=localStorage.getItem('type_login');
	    if(this.errors.indexOf(this.userid)==-1 && this.errors.indexOf(this.type_login)==-1){
			this.router.navigate(['/tabs/home']);
		}
  }
  login(user)
  {
  if(user=='individual')
  {
	localStorage.setItem('type_login','2'); 
	this.router.navigate(['/login']);
  }else
  {
	
	/*  this.globalFooService.publishSomeData({
            	set: {'data': '1'}
				
			}); */
	 //this.router.navigate(['/login']);
	//this.api.navCtrl.navigateRoot('tabs/home');
	localStorage.setItem('type_login','1'); 
	this.router.navigate(['/login']);
  }
  }

}

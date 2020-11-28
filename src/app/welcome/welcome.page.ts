import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
type_login:any;
userid:any;
errors:any=['',null,undefined];
  constructor(public api:ApiService, public router:Router,private common: CommonService) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
	    this.userid=localStorage.getItem('userid');
	    this.type_login=localStorage.getItem('type_login');
	    if(this.errors.indexOf(this.userid)==-1 && this.errors.indexOf(this.type_login)==-1){
			
			if(this.type_login==1)
			{
			this.router.navigate(['/tabs/home']);
			
			}else
			{
				this.router.navigate(['/tabs/home2']);
			}
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
	 localStorage.setItem('type_login','1'); 
	 this.router.navigate(['/login']);
  }
  }

}

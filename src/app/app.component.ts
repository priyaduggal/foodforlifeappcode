import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { config } from './config';
//import {CommonService} from '../common/common.service';
import { GlobalFooService } from './services/globalFooService.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  userid:any;
  IMAGES_URL:any = config.IMAGES_URL;
  errors:any=['',null,undefined];
  type_login:any;
  userdetails:any;
  public selectedIndex = 0;
  public appPages = [
   
	{
      title: 'Logout',
      url: '/signup',
      icon: 'log-out-outline'
    }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
first_name:any;
last_name:any;
email:any;
profile_pic:any;
  constructor(
  private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
	private router: Router,
	private globalFooService: GlobalFooService
  ) {
	 
	  this.globalFooService.getObservable().subscribe((data) => {
			if(this.errors.indexOf(data.foo)==-1)
			{
				this.userid=data.foo.data.id;
				this.type_login=data.foo.data.type;
				this.first_name=localStorage.getItem('food_first_name');
				this.last_name=localStorage.getItem('food_last_name');
				this.email=localStorage.getItem('food_email');
				this.profile_pic=localStorage.getItem('profile_pic');
				
			}
			console.log(this.errors.indexOf(data.set));
			if(this.errors.indexOf(data.set)==-1)
			{
				this.type_login=data.set.data;
				localStorage.setItem('type_login','1'); 
			}
			
        });
    this.initializeApp();
  }
 initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  ionViewDidEnter(){
	
  }
  logout()
  {
	 localStorage.clear();
//this.events.publish('logged_in:true','');
this.router.navigate(["/"]);
	  
  }
}

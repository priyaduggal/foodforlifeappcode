import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GlobalFooService } from '../services/globalFooService.service';
import { DonationjarPage } from '../donationjar/donationjar.page';
import {CommonService} from '../common/common.service';
import {ApiService } from '../services/api/api.service';
import { config } from '../config';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 // @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
userid:any;
IMAGES_URL:any = config.IMAGES_URL;
errors:any=['',null,undefined];
type_login:any;
list=[];
slideOptsOne = {
initialSlide: 0,
slidesPerView: 1,
autoplay: true
};
  constructor(public api:ApiService,private globalFooService: GlobalFooService,public modalController: ModalController,private common: CommonService)  { 
		this.globalFooService.getObservable().subscribe((data) => {
            
			if(this.errors.indexOf(data.foo)==-1)
			{
				this.type_login=data.foo.data.type;
				localStorage.setItem('type_login',data.foo.data.type); 
			}
			console.log(this.errors.indexOf(data.set));
			if(this.errors.indexOf(data.set)==-1)
			{
				this.type_login=data.set.data;
				localStorage.setItem('type_login','1'); 
			}
			
        });
   }
  ngOnInit() {
   }
  ionViewDidEnter()
   {
	this.userid=localStorage.getItem('userid');
	this.type_login=localStorage.getItem('type_login');
	//alert();
	this.Charitylist();
   }
   Charitylist()
   {
	   // this.common.presentLoading();
  	 	this.api.post('charitylist','','').subscribe((result) => {  
		//this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.list=res.data;	
		 
		}else
		{
		//this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
   }

}

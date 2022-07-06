import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { AddamountPage } from '../addamount/addamount.page';
import { ModalController } from '@ionic/angular';
import { GlobalFooService } from '../services/globalFooService.service';
@Component({
  selector: 'app-activitydetail',
  templateUrl: './activitydetail.page.html',
  styleUrls: ['./activitydetail.page.scss'],
})
export class ActivitydetailPage implements OnInit {
	activityid:any;
	activity:any;
	IMAGES_URL:any = config.IMAGES_URL;
	errors:any=['',null,undefined];
	constructor(private globalFooService: GlobalFooService,public modalController: ModalController,public activatedRoute: ActivatedRoute,public api:ApiService, public router:Router,private common: CommonService) {
	this.activityid = activatedRoute.snapshot.paramMap.get('id');
	this.globalFooService.getObservable().subscribe((data) => {
	if(this.errors.indexOf(data.paydata)==-1)
			{
				this.getactivitydetails();
			}
});
	}

	convertdate(date)
  {

	return date;
  }
 async give(id)
   {
	   const modal = await this.modalController.create({
		component: AddamountPage,
		cssClass: 'leaveteam',
		componentProps: {
		actid:id,
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		//this.team.joins=this.team.joins - 1;
		//this.getuserteams();
		}
       });
    return await modal.present();
   }
  ngOnInit() {
  }
  
   ionViewDidEnter()
  {
	  this.getactivitydetails();
  }
  getactivitydetails()
  {
		let dict ={
		id: this.activityid,
		};
		this.common.presentLoading();
		this.api.post('activitydetail', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.activity=res.data;

		}else
		{

		}
		},
		err => {

		});
  }
  
  
  

}

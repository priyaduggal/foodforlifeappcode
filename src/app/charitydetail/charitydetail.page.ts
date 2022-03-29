import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { AddamountPage } from '../addamount/addamount.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-charitydetail',
  templateUrl: './charitydetail.page.html',
  styleUrls: ['./charitydetail.page.scss'],
})
export class CharitydetailPage implements OnInit {
charityid:any;
charity:any;
IMAGES_URL:any = config.IMAGES_URL;
images:any;
errors:any=['',null,undefined];
tags:any;
constructor(public modalController: ModalController,public activatedRoute: ActivatedRoute,public api:ApiService, public router:Router,private common: CommonService) {
this.charityid = activatedRoute.snapshot.paramMap.get('id');
}

  ngOnInit() {
  }
  async give(id)
   {
	   const modal = await this.modalController.create({
		component: AddamountPage,
		cssClass: 'leaveteam',
		componentProps: {
		id:id,
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
  
   ionViewDidEnter()
  {
	  this.getcharitydetails();
  }
  getcharitydetails()
  {
	  	let dict ={
		id: this.charityid,
		};
		this.common.presentLoading();
		this.api.post('charitydetail', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			
		var string = res.data.tags;
		var strx   = string.split(',');
		var array  = [];
		array = array.concat(strx);	
		this.tags=array;
		this.charity=res.data;
		this.images=res.images;
		}else
		{

		}
		},
		err => {

		});

  }

}

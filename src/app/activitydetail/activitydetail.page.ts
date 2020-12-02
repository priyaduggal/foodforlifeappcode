import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';

@Component({
  selector: 'app-activitydetail',
  templateUrl: './activitydetail.page.html',
  styleUrls: ['./activitydetail.page.scss'],
})
export class ActivitydetailPage implements OnInit {
	activityid:any;
	activity:any;
	IMAGES_URL:any = config.IMAGES_URL;
	constructor(public activatedRoute: ActivatedRoute,public api:ApiService, public router:Router,private common: CommonService) {
	this.activityid = activatedRoute.snapshot.paramMap.get('id');
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

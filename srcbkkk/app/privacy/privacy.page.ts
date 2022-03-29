import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {
privacy:any;
  constructor(public api:ApiService,
  public router:Router,
  private common: CommonService) { }

  ngOnInit() {
  }
   ionViewDidEnter()
  {
	this.getprivacydetails();
  }
  getprivacydetails()
  {
	this.common.presentLoading();
	this.api.post('getprivacypolicy','','').subscribe((result) => {  
	this.common.stopLoading();
	var res;
	res = result;
	if(res.status==1){
	this.privacy=res.data;
	//this.common.presentToast('FAQ fetched successfully !.','success');
	}else
	{
	//this.common.presentToast(res.message,'danger');
	this.privacy='';
	}
	},
	err => {
		 
	});
  }

}

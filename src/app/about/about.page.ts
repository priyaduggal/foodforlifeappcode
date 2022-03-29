import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
about:any;
  constructor(public api:ApiService,
  public router:Router,
  private common: CommonService) { }

  ngOnInit() {
  }
  ionViewDidEnter()
  {
	this.getfaqdetails();
  }
  getfaqdetails()
  {
	this.common.presentLoading();
	this.api.post('Getaboutuscontent','','').subscribe((result) => {  
	this.common.stopLoading();
	var res;
	res = result;
	if(res.status==1){
	this.about=res.data;
	//this.common.presentToast('FAQ fetched successfully !.','success');
	}else
	{
	//this.common.presentToast(res.message,'danger');
	this.about='';
	}
	},
	err => {
		 
	});
  }
}

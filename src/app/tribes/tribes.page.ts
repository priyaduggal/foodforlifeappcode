import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';

@Component({
  selector: 'app-tribes',
  templateUrl: './tribes.page.html',
  styleUrls: ['./tribes.page.scss'],
})
export class TribesPage implements OnInit {
 tribetab: string = "projects";
  isAndroid: boolean = false;
  projectlist=[];
  activities=[];
  beneficiaries=[];
  IMAGES_URL:any = config.IMAGES_URL;
  constructor(public api:ApiService, public router:Router,private common: CommonService) { }

  ngOnInit() {
  }
  
  ionViewDidEnter()
  {
	  this.getprojects();
	  this.getbeneficiaries();
	  this.getactivities();
  }
  getprojects()
  {
	    this.common.presentLoading();
  	 	this.api.post('tribesProject', '','').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.projectlist=res.data;
		}else
        {
			
		}
		},
		err => {
             
        });
  }
   getbeneficiaries()
  {
	    //this.common.presentLoading();
  	 	this.api.post('tribesbeneficiaries', '','').subscribe((result) => {  
		//this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.beneficiaries=res.data;
		}else
        {
			
		}
		},
		err => {
             
        });
  }
   getactivities()
  {
	    //this.common.presentLoading();
  	 	this.api.post('tribesactivities', '','').subscribe((result) => {  
		//this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.activities=res.data;
		}else
        {
			
		}
		},
		err => {
             
        });
  }
  
  

}

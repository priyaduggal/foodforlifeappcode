import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-searchteam',
  templateUrl: './searchteam.page.html',
  styleUrls: ['./searchteam.page.scss'],
})
export class SearchteamPage implements OnInit {
IMAGES_URL:any = config.IMAGES_URL;
errors:any=['',null,undefined];
userid:any;
search_text:any;
teams=[];
timeout=null;
  constructor(public api:ApiService,
  public router:Router,
  private common: CommonService) { }

  ngOnInit() {
  }
  search_keyword(event)
  {  
   clearTimeout(this.timeout);
	 var self = this;
      this.timeout = setTimeout(function () {
		  if(self.errors.indexOf(event.target.value)==-1){
			  self.search_text=event.target.value;
			   self.save1();
		  }
		 else{
			 self.search_text=event.target.value;
			  self.save1();  
		  }
    }, 500);
  }
  save1()
  {
	   let dict ={
      text: this.search_text
    };
	  //this.common.presentLoading();
		this.api.post('SearchTeams',dict,'').subscribe((result) => {  
		//this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.teams=res.data;
		this.common.presentToast('Teams fetched successfully !.','success');
		}else
		{
		this.common.presentToast(res.message,'danger');
		this.teams=[];
		}
        },
        err => {
             
        });
	  
  }
  ionViewDidEnter()
  {
	this.userid=localStorage.getItem('userid');
	this.getallteams();
  }
  getallteams()
  {

	this.common.presentLoading();
		this.api.post('GetAllTeams','','').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.teams=res.data;
		this.common.presentToast('Teams fetched successfully !.','success');
		}else
		{
		this.common.presentToast(res.message,'danger');
		this.teams=[];
		}
        },
        err => {
             
        });
  }

}

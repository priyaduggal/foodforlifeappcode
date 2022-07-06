import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
faqlist=[];
  constructor(public api:ApiService,
  public router:Router,
  private common: CommonService) { }

  ngOnInit() {
  }
   ionViewDidEnter()
  {
	this.getallfaq();
  }
  getallfaq()
  {
	this.api.post('GetAllFaq','','').subscribe((result) => {  
	var res;
	res = result;
	if(res.status==1){
	this.faqlist=res.data;
	//this.common.presentToast('FAQ fetched successfully !.','success');
	}else
	{
	//this.common.presentToast(res.message,'danger');
	this.faqlist=[];
	}	
	},
	err => {
		 
	});
  }

}

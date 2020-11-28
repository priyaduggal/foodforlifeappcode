import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {
termlist=[];
  constructor(public api:ApiService,
  public router:Router,
  private common: CommonService) { }

  ngOnInit() {
  }
   ionViewDidEnter()
  {
	this.getallterms();
  }
  
  getallterms()
  {
	this.common.presentLoading();
	this.api.post('GetAllTerms','','').subscribe((result) => {  
	this.common.stopLoading();
	var res;
	res = result;
	if(res.status==1){
	this.termlist=res.data;
	this.common.presentToast('Terms of use fetched successfully !.','success');
	}else
	{
	this.common.presentToast(res.message,'danger');
	this.termlist=[];
	}
	},
	err => {
		 
	});
  }

}

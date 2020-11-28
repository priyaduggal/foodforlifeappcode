import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';


@Component({
  selector: 'app-leaveteamconfirm',
  templateUrl: './leaveteamconfirm.page.html',
  styleUrls: ['./leaveteamconfirm.page.scss'],
})
export class LeaveteamconfirmPage implements OnInit {
userid:any;
teamid:any;
team_name:any;
constructor(public navParams: NavParams,public api:ApiService,public router:Router,private common: CommonService,public modalController: ModalController) { 
	this.userid = navParams.get('userid');
	this.teamid = navParams.get('teamid');
	this.getteamdetails();
}


  ngOnInit() {
  }
getteamdetails()
{
	   let dict ={
       id: this.teamid,
    };
	   this.common.presentLoading();
  	 	this.api.post('teamdetail',dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.team_name=res.data.name;
			
		}else
        {
			
		}
		},
		err => {
             
        });
}
cancelok()
{
	this.modalController.dismiss('joinedsuucessfully');
}
cancel()
{
	this.modalController.dismiss();
}
join()
{
	let dict ={
	userid:this.userid,
	teamid:this.teamid,
	};

	this.common.presentLoading();
	this.api.post('JoinTeam',dict,'').subscribe((result) => {  
	this.common.stopLoading();
	var res;
	res = result;
	if(res.status==1){
	this.common.presentToast('Team leaved successfully !.','success');
	this.cancelok();
	}else
	{
	this.common.presentToast(res.message,'danger');
	}
	},
	err => {

	});
}
}

import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-jointeamconfirm',
  templateUrl: './jointeamconfirm.page.html',
  styleUrls: ['./jointeamconfirm.page.scss'],
})
export class JointeamconfirmPage implements OnInit {
userid:any;
teamid:any;
constructor(public navParams: NavParams,public api:ApiService,public router:Router,private common: CommonService,public modalController: ModalController) { 
	this.userid = navParams.get('userid');
	this.teamid = navParams.get('teamid');
}

ngOnInit() {
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
	this.common.presentToast('Team joined successfully !.','success');
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

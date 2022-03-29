import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import { ModalController, 
  NavParams } from '@ionic/angular';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { JointeamconfirmPage } from '../jointeamconfirm/jointeamconfirm.page';
import { LeaveteamconfirmPage } from '../leaveteamconfirm/leaveteamconfirm.page';
import { AddamountPage } from '../addamount/addamount.page';
import { GlobalFooService } from '../services/globalFooService.service';
@Component({
  selector: 'app-teamdetail',
  templateUrl: './teamdetail.page.html',
  styleUrls: ['./teamdetail.page.scss'],
})
export class TeamdetailPage implements OnInit {
IMAGES_URL:any = config.IMAGES_URL;
teamid:any;
errors:any=['',null,undefined];
userid:any;
joined=[];
team:any;
  constructor(private globalFooService: GlobalFooService,public modalController: ModalController,public activatedRoute: ActivatedRoute,public api:ApiService, public router:Router,private common: CommonService) {
	this.teamid = activatedRoute.snapshot.paramMap.get('id');
	this.globalFooService.getObservable().subscribe((data) => {
	if(this.errors.indexOf(data.paydata1)==-1)
			{
				console.log('ssssss');
				this.userid=localStorage.getItem('userid');
				this.getteamdetails();
				this.getuserteams();
			}
});
  }

  ngOnInit() {
  }
  async give(id)
   {
	   const modal = await this.modalController.create({
		component: AddamountPage,
		cssClass: 'leaveteam',
		componentProps: {
		teamid:id,
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		}
       });
    return await modal.present();
   }
  ionViewDidEnter()
  {
	this.userid=localStorage.getItem('userid');
	this.getteamdetails();
	this.getuserteams();
  }
  async leave_team()
  {
		const modal = await this.modalController.create({
		component: LeaveteamconfirmPage,
		cssClass: 'leaveteam',
		componentProps: {
		userid:this.userid,
		teamid:this.team.id,
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		this.team.joins=this.team.joins - 1;
		this.getuserteams();
		}
 });
    return await modal.present();
  	
  }
  async join_team()
  {
		const modal = await this.modalController.create({
		component: JointeamconfirmPage,
		cssClass: 'jointeamconfirm',
		componentProps: {
		userid:this.userid,
		teamid:this.team.id,
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		this.team.joins=this.team.joins + 1;
		this.getuserteams();
		}

		});
		return await modal.present();
  }
  getuserteams()
  {
		let dict ={
		userid: this.userid,
		};console.log(dict);

		this.api.post('UserJoinedTeams',dict,'').subscribe((result) => {  
		var res;
		res = result;
		if(res.status==1){
		var array2=[];
		if(res.data.length>0)
		{
		res.data.forEach(function (o) {
		array2.push(o.teamid);
		});
		}
		this.joined=array2;
		}else
		{
		this.joined=[];
		}
		},
		err => {
		});
	  
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
		this.team=res.data;
		}else
		{
		}
		},
		err => {

		});
	  
  }

}

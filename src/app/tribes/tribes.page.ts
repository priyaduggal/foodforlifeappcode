import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { AddamountPage } from '../addamount/addamount.page';
import { ModalController } from '@ionic/angular';
import { GlobalFooService } from '../services/globalFooService.service';
@Component({
  selector: 'app-tribes',
  templateUrl: './tribes.page.html',
  styleUrls: ['./tribes.page.scss'],
})
export class TribesPage implements OnInit {
 tribetab: string = "projects";
  isAndroid: boolean = false;
  projectlist=[];
  projectlist1=[];
  errors:any=['',null,undefined];
  activities=[];
  beneficiaries=[];
  beneficiariesc=[];
  userid:any;
  userdetails:any;
  IMAGES_URL:any = config.IMAGES_URL;
  constructor(public modalController: ModalController,public api:ApiService, public router:Router,private common: CommonService) { }

  ngOnInit() {
  }
  
  ionViewDidEnter()
  {
	  this.userid=localStorage.getItem('userid');
	  this.getuserdetails();
	  this.getprojects();
      this.getcompanyprojects();
	  this.getbeneficiaries();
	  this.getcbeneficiaries();
	  this.getactivities();
	  
  }
  getuserdetails()
  {
	  let dict ={
		id: this.userid
		};
		// this.common.presentLoading();
		if(this.errors.indexOf(this.userid)>=0 )
		{

		this.common.presentToast('Please login first!.','danger');
		return false;
		}
  	 	this.api.post('Userdetails', dict,'').subscribe((result) => {  
		// this.common.stopLoading();
		 var res;
		res = result;
		if(res.status==1){
		this.userdetails=res.data;
		//this.donationlist=res.donations;
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
          		this.common.presentToast('Some error occured','danger');   
        });
  }
   async give(id)
   {
	   const modal = await this.modalController.create({
		component: AddamountPage,
		cssClass: 'leaveteam',
		componentProps: {
		actid:id,
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		//this.team.joins=this.team.joins - 1;
		//this.getuserteams();
		}
       });
    return await modal.present();
   }
  getcompanyprojects()
   {
  	 	this.api.post('tribesProject', '','').subscribe((result) => {  
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
  getprojects()
  {
	   // this.common.presentLoading();
  	 	this.api.post('tribesProject', '','').subscribe((result) => {  
		//this.common.stopLoading();
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
  getcbeneficiaries()
  {
	  
  	 	this.api.post('companybeneficiaries', '','').subscribe((result) => {  
		var res;
		res = result;
		if(res.status==1){
			this.beneficiariesc=res.data;
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

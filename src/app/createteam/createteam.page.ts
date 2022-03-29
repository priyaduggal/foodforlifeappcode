import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.page.html',
  styleUrls: ['./createteam.page.scss'],
})
export class CreateteamPage implements OnInit {
IMAGES_URL:any = config.IMAGES_URL;
userid:any;
is_submit_team:boolean=false;
errors:any=['',null,undefined];
teamlist=[];
name:any;
allowedMimes:any = ['image/png', 'image/jpg', 'image/jpeg'];
license_error:boolean=false;
license_file:any;
is_license_uploaded:boolean=false;
license_image_url:any;
public uploader:FileUploader = new FileUploader({url: ''});
description:any;
  constructor(public activatedRoute: ActivatedRoute,public api:ApiService, public router:Router,private common: CommonService,public sanitizer:DomSanitizer) { 
  this.userid=localStorage.getItem('userid');
  }

  ngOnInit() {
  }
  uploadImage(event){
    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      if(self.allowedMimes.indexOf(image_file.type) == -1){
      this.license_error = true;
      this.common.presentToast('This format is not allowed !.','danger');
      }
      else{
        self.license_file = image_file;
        self.license_image_url = window.URL.createObjectURL(image_file);
        $('.user_image1').attr('src',self.license_image_url);
		
     
      }
    }
  }
  ionViewDidEnter()
  {
	  this.userid=localStorage.getItem('userid');
	  this.getmyteam();
  }
  getmyteam()
  {
	     let dict ={
			userid: this.userid,
    };
	   this.common.presentLoading();
  	 	this.api.post('Getmyteams', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.teamlist=res.data;
			
		}else
        {
			
		}
		},
		err => {
             
        });
  }
  submit()
	{
 this.is_submit_team = true;
    if(this.errors.indexOf(this.license_file)>=0 || this.errors.indexOf(this.name) >= 0 || this.errors.indexOf(this.description) >= 0){
      return false;
    }
	
	if(this.errors.indexOf(this.userid)>=0 )
	{
		
        this.common.presentToast('Please login first!.','danger');
		return false;
	}
	this.common.presentLoading();
	const frmData = new FormData();  
	frmData.append("image", this.license_file);	
	frmData.append("name", this.name);
	frmData.append("description",this.description);
	frmData.append("userid",this.userid);

    this.api.post('addTeam',frmData,'').subscribe((result) => { 
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status == 1){
		this.is_submit_team = false;
		this.getmyteam();
        this.license_file='';
		this.name='';
		this.description='';
		this.license_file='';
		this.is_license_uploaded=false;
		$('.user_image1').attr('src','assets/images/createteam.png');
		this.common.presentToast('Team added successfully!.',
			'success');
		}
		else{
        this.common.presentToast('Error in adding team!.','danger');

		}
		},
		err => {
        
    }); 
	}
}

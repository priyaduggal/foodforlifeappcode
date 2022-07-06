import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-socialshareoptions',
  templateUrl: './socialshareoptions.page.html',
  styleUrls: ['./socialshareoptions.page.scss'],
})
export class SocialshareoptionsPage implements OnInit {
details:any;
description:any;
text:any;
link:any;
imgurl:any;
errors:any=['',null,undefined];
  constructor( private socialSharing: SocialSharing,public navParams: NavParams,
  public api:ApiService,
  public router:Router,
  private common: CommonService,
  public modalController: ModalController) { 
  this.details = navParams.get('donation');
  
  if(this.errors.indexOf(this.details?.actid)==-1)
  {
	  this.text=this.details?.atitle;
  }else if(this.errors.indexOf(this.details?.teamid)==-1)
  {
	  this.text=this.details?.ttitle;
  }else if(this.errors.indexOf(this.details?.charityid)==-1)
  {
	  this.text=this.details?.title;
  }else
  {
	  
  }
  
  if(this.errors.indexOf(this.details?.actid)==-1)
  {
	  this.description='FoodForLife :- '+this.text+' $'+this.details?.amount+' '+ ' donated to activity ' +this.details?.atitle;
	  
  }else if(this.errors.indexOf(this.details?.teamid)==-1)
  {
	  this.description='FoodForLife :- '+this.text+' $'+this.details?.amount+' '+ ' donated to team ' +this.details?.ttitle;
	  
  }else if(this.errors.indexOf(this.details?.charityid)==-1)
  {
	  this.description='FoodForLife :- '+this.text+' $'+this.details?.amount+' '+ ' donated to project ' +this.details?.title;
  }else
  {
	  
  }
  
  if(this.errors.indexOf(this.details?.charityid)>=0 && this.errors.indexOf(this.details?.teamid)>=0 
   && this.errors.indexOf(this.details?.actid)>=0)
  {
	   this.description=this.details?.amount+' '+ ' donated to donation jar';
  }
  
  
  
  this.link='https://link.medium.com/JA4amAHFJ5';
  this.imgurl='https://dev.indiit.solutions/foodforlife/api/public/uploads/logonew.png';
	
}
cancel()
{
	this.modalController.dismiss();
}
ShareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.description)
  }
  ShareFacebook(){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.description, null, null /* url */, 'Copia Pega!')
  }
 ShareGeneric(parameter){
    //const url = this.link
   // const text = parameter+'\n'
    //this.socialSharing.share(text, 'MEDIUM', null, url)
  }
  SendEmail(){
    this.socialSharing.shareViaEmail( this.description, 'FoodForLife Donations', ['email@address.com'])
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.description, this.imgurl, this.link)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.description, this.imgurl)
  }


  ngOnInit() {
  }

}

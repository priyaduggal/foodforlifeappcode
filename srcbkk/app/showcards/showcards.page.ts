import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-showcards',
  templateUrl: './showcards.page.html',
  styleUrls: ['./showcards.page.scss'],
})
export class ShowcardsPage implements OnInit {
cards=[];
amount:any;
userid:any;
charityid:any;
actid:any;
name:any;
teamid:any;
card_number:any;
exp_date:any;
cvc:any;
cardid:any;
is_submit_payment:boolean=false;
errors:any=['',null,undefined];
  constructor(public navParams: NavParams,
  public api:ApiService,
  public router:Router,
  private common: CommonService,
  public modalController: ModalController) {
  this.cards = navParams.get('cards');
  this.charityid = navParams.get('charityid');
  	this.teamid = navParams.get('teamid');
  	this.actid = navParams.get('actid');
	this.amount = navParams.get('amount');
	
	this.userid = navParams.get('userid');
 }
confirm()
	{
		this.cardid='';
		
		$('.ionradioch').val('');
		//$('.ionradioch').removeClass('radio-checked');
		$('.add_new_card_btn').hide();
		$('.add_payment').show();
	}
	
dismiss()
	{
	 this.modalController.dismiss({
      'dismissed': true
    });
  }
  search_keyword(event)
	{
		this.cardid='';
		
		$('.radiobox').val('');
		}
	
  hide()
  {
	  this.name='';
	  this.card_number='';
	  this.exp_date='';
	  this.cvc='';
	  $('.add_new_card_btn').show();
	  $('.add_payment').hide();
  }
  cardno(id)
	{
		this.cardid=id;
	}
  pay(){
		this.name=$('.namee').val();
		this.card_number=$('.card_numberr').val();
		this.exp_date=$('.exp_datee').val();
		this.cvc=$('.cvcc').val();
		
		
		if(this.errors.indexOf(this.cardid)>=0 
		&& this.errors.indexOf(this.name)>=0 
		&& this.errors.indexOf(this.card_number)>=0 
		&& this.errors.indexOf(this.exp_date)>=0 
		&& this.errors.indexOf(this.cvc)>=0)
		{
			this.common.presentToast('Please select card or add new card','danger');
		    return false;
		}else
		{
			if(this.errors.indexOf(this.cardid)==-1)
			{
				let dict ={
							cardid:this.cardid,
							userid:this.userid,
							amount:this.amount,
							charityid:this.charityid,
							actid:this.actid,
							teamid:this.teamid,
							};
							this.common.presentLoading();
							this.api.post('AddPaymentwithsubscriptionCard', dict,'').subscribe((result) => {  
							this.common.stopLoading();
							this.is_submit_payment=false;
							var res;
							res = result;
							if(res.status==1){
							this.name = '';
							this.card_number = '';
							this.exp_date = '';
							this.cvc = '';
								this.common.presentToast('Donated Successfully !.','success');
							this.dismiss();
							/* this.globalFooService.publishSomeData({
							set: {'paydata': res.status}

							}); */
							if(this.errors.indexOf(this.actid)==-1)
							{
							this.router.navigate(['/tabs/tribes']);
							}else if(this.errors.indexOf(this.teamid)==-1)
							{
							this.router.navigate(['/searchteam']);
							}else{
							this.router.navigate(['/tabs/home']);
							}
					}else
					{
					this.common.presentToast(res.msg,'danger');
					}
					},
					err => {
this.common.stopLoading();
                         this.common.presentToast('Some error occured','danger');
					});
					
			}else
			{
				this.is_submit_payment=true;
					if(this.errors.indexOf(this.name)>=0 && this.errors.indexOf(this.card_number)>=0 && this.errors.indexOf(this.exp_date)>=0 && this.errors.indexOf(this.cvc)>=0)
					{
					this.common.presentToast('Please select card or add new card','danger');
					return false;
					}else{
							let dict ={
							name: this.name,
							card_number: this.card_number,
							exp_date:this.exp_date,
							cvc: this.cvc,
							userid:this.userid,
							amount:this.amount,
							charityid:this.charityid,
							actid:this.actid,
							teamid:this.teamid,
							};
							this.common.presentLoading();
							this.api.post('AddPaymentwithsubscription', dict,'').subscribe((result) => {  
							this.common.stopLoading();
							this.is_submit_payment=false;
							var res;
							res = result;
							if(res.status==1){
							this.name = '';
							this.card_number = '';
							this.exp_date = '';
							this.cvc = '';
							this.common.presentToast('Donated Successfully !.','success');
							this.dismiss();
							
							if(this.errors.indexOf(this.actid)==-1)
							{
								/* this.globalFooService.publishSomeData({
							set: {'paydata': res.status}

							}); */
							this.router.navigate(['/tabs/tribes']);
							}else if(this.errors.indexOf(this.teamid)==-1)
							{
								/* this.globalFooService.publishSomeData({
							set: {'paydata1': res.status}

							}); */
							this.router.navigate(['/searchteam']);
							}else{
							this.router.navigate(['/tabs/home']);
							}
					}else
					{
					this.common.presentToast(res.msg,'danger');
					}
					},
					err => {
						this.common.stopLoading();
                         this.common.presentToast('Some error occured','danger');
					});
						
					}
			}
				
		}
	}
  ngOnInit() {
  }

}

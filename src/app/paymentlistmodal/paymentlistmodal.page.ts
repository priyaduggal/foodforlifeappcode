import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-paymentlistmodal',
  templateUrl: './paymentlistmodal.page.html',
  styleUrls: ['./paymentlistmodal.page.scss'],
})
export class PaymentlistmodalPage implements OnInit {
amount:any;
charityid:any;
name:any;
card_number:any;
exp_date:any;
cvc:any;
errors:any=['',null,undefined];
userid:any;
paymentlist=[];
cardid:any;
is_submit_payment:boolean=false;
  constructor(public navParams: NavParams,public api:ApiService,public router:Router,private common: CommonService,public modalController: ModalController) { 
  	this.charityid = navParams.get('charityid');
	this.amount = navParams.get('amount');
	this.userid = navParams.get('userid');
	this.listpayment();
	}
	search_keyword(event)
	{
		this.cardid='';
		
		$('.radiobox').val('');
		}
	pay()
	{
		this.name=$('.namee').val();
		this.card_number=$('.card_numberr').val();
		this.exp_date=$('.exp_datee').val();
		this.cvc=$('.cvcc').val();
		
		
		if(this.errors.indexOf(this.cardid)>=0 && this.errors.indexOf(this.name)>=0 && this.errors.indexOf(this.card_number)>=0 && this.errors.indexOf(this.exp_date)>=0 && this.errors.indexOf(this.cvc)>=0)
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
								this.common.presentToast('Meals donated Successfully !.','success');
							this.dismiss();
							this.router.navigate(['/tabs/home']);
					}else
					{
					this.common.presentToast(res.message,'danger');
					}
					},
					err => {

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
							this.common.presentToast('Meals donated Successfully !.','success');
							this.dismiss();
							this.router.navigate(['/tabs/home']);
					}else
					{
					this.common.presentToast(res.message,'danger');
					}
					},
					err => {

					});
						
					}
			}
				
		}
	}
	cardno(id)
	{
		this.cardid=id;
	}
	dismiss()
	{
	 this.modalController.dismiss({
      'dismissed': true
    });
  }
	confirm()
	{
		$('.add_new_card_btn').hide();
		$('.add_payment').show();
	}
listpayment()
  {
	  if(this.errors.indexOf(this.userid)>=0 )
	{
		
        this.common.presentToast('Please login first!.','danger');
		return false;
	}
		let dict ={
		userid: this.userid,
		};
        this.common.presentLoading();
  	 	this.api.post('ListPayment', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.paymentlist=res.data;
			
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
  
  }
  ngOnInit() {
  }

}

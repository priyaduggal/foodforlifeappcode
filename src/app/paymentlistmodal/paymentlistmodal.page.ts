import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';
import { GlobalFooService } from '../services/globalFooService.service';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ShowcardsPage } from '../showcards/showcards.page';
@Component({
  selector: 'app-paymentlistmodal',
  templateUrl: './paymentlistmodal.page.html',
  styleUrls: ['./paymentlistmodal.page.scss'],
})
export class PaymentlistmodalPage implements OnInit {
amount:any;
charityid:any;
actid:any;
name:any;
teamid:any;
card_number:any;
exp_date:any;
cvc:any;
errors:any=['',null,undefined];
userid:any;
paymentlist=[];
cardid:any;
is_submit_payment:boolean=false;
  constructor(private payPal: PayPal,
  private globalFooService: GlobalFooService,
  public navParams: NavParams,
  public api:ApiService,
  public router:Router,
  private common: CommonService,
  public modalController: ModalController) { 
  	this.charityid = navParams.get('charityid');
  	this.teamid = navParams.get('teamid');
  	this.actid = navParams.get('actid');
	this.amount = navParams.get('amount');
	
	this.userid = navParams.get('userid');
	this.listpayment();
	}
	paywith(text)
	{
	  if(text=='paypal')
	  {
			this.payPal.init({
			PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
			PayPalEnvironmentSandbox: 'AdLfQ47Z64fgnvwIdJRLOVH33vnaSCe4EI2J5PzUktXaYBQYPbsRMxdKUlMZWzopKzj9VNqoO_IMZLFZ'
			}).then(() => {
			// Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
			// Only needed if you get an "Internal Service Error" after PayPal login!
			//payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
			})).then(() => {
			let payment = new PayPalPayment(this.amount, 'USD', 'Description', 'sale');
			this.payPal.renderSinglePaymentUI(payment).then(() => {
			// Successfully paid

			// Example sandbox response
			//
			// {
			//   "client": {
			//     "environment": "sandbox",
			//     "product_name": "PayPal iOS SDK",
			//     "paypal_sdk_version": "2.16.0",
			//     "platform": "iOS"
			//   },
			//   "response_type": "payment",
			//   "response": {
			//     "id": "PAY-1AB23456CD789012EF34GHIJ",
			//     "state": "approved",
			//     "create_time": "2016-10-03T13:33:33Z",
			//     "intent": "sale"
			//   }
			// }
			}, () => {
			// Error or render dialog closed without being successful
			});
			}, () => {
			// Error in configuration
			});
			}, () => {
			// Error in initialization, maybe PayPal isn't supported or something else
			});
	  }else if(text=='stripe')
	  {
		  this.callstripe();
		  
		  
	  }else{
		  
	  }
	}
	async callstripe()
	{
		const modal = await this.modalController.create({
		component: ShowcardsPage,
		cssClass: 'leaveteam',
		componentProps: {
		cards:this.paymentlist,
		charityid:this.charityid,
		teamid:this.teamid,
		actid:this.actid,
		amount:this.amount,
		userid:this.userid,
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		 this.dismiss();
		}
		});
		return await modal.present();
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

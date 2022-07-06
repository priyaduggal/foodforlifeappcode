import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams,AlertController} from '@ionic/angular';
import { GlobalFooService } from '../services/globalFooService.service';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ShowcardsPage } from '../showcards/showcards.page';
import { ThankyouPage } from '../thankyou/thankyou.page';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { ApplePay } from '@ionic-native/apple-pay/ngx';


@Component({
  selector: 'app-paymentlistnew',
  templateUrl: './paymentlistnew.page.html',
  styleUrls: ['./paymentlistnew.page.scss'],
})
export class PaymentlistnewPage implements OnInit {
planid:any;
userid:any;
action:any;
cardid:any;
paymentAmount: string = '3.33';
currency: string = 'INR';
currencyIcon: string = '₹';
amount:any;
charityid:any;
actid:any;
name:any;
teamid:any;
card_number:any;
exp_date:any;
cvc:any;
errors:any=['',null,undefined];
paymentlist=[];
is_submit_payment:boolean=false;
shippingMethods: any = [
  {
    identifier: 'NextDay',
    label: 'NextDay',
    detail: 'Arrives tomorrow by 5pm.',
    amount: 3.99
  }
];
items: any = [
  {
    label:'Food For Life',
    amount:this.navParams.get('amount')
  },
];
supportedNetworks: any = ['visa'];
merchantCapabilities: any = ['3ds', 'debit', 'credit'];
merchantIdentifier: string = 'merchant.hititfit.indiankey';
currencyCode: string = 'USD';
countryCode: string = 'US';
billingAddressRequirement: any = ['name', 'email', 'phone'];
shippingAddressRequirement: any = 'none';
shippingType: string = "shipping"
  constructor(private payPal: PayPal, private applePay: ApplePay,
  private globalfoo: GlobalFooService,  public alertController: AlertController,
  public navParams: NavParams,
  public api:ApiService,
  public router:Router,private webIntent: WebIntent,
  private common: CommonService,
  private appLauncher: AppLauncher,
  public modalController: ModalController) { 
		this.planid = navParams.get('planid');
		this.cardid = navParams.get('cardid');
		this.userid = navParams.get('userid');
		this.action = navParams.get('action');
		
		 let _this = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value:navParams.get('amount')
              }
            }]
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture()
            .then(function (details) {
              // Show a success message to the buyer
			  console.log(details);
			  	let dict ={
							//cardid:this.cardid,
							userid: navParams.get('userid'),
							amount:navParams.get('amount'),
							charityid:navParams.get('charityid'),
							actid:navParams.get('actid'),
							teamid:navParams.get('teamid'),
							transactionid:details.id
							};
							
						
							_this.api.post('AddPaymentwithsubscriptionPaypal', dict,'').subscribe((result) => {  
							
							_this.is_submit_payment=false;
							var res;
							res = result;
							if(res.status==1){
						    _this.dismiss();
							_this.common.presentToast('Donated Successfully !.','success');
							if(_this.errors.indexOf(_this.actid)==-1)
							{
							_this.router.navigate(['/tabs/tribes']);
							}else if(_this.errors.indexOf(_this.teamid)==-1)
							{
							_this.router.navigate(['/searchteam']);
							}else{
							_this.router.navigate(['/tabs/home']);
							}
					}else
					{
					_this.common.presentToast(res.msg,'danger');
					}
					},
					err => {
						
					_this.common.presentToast('Some error occured','danger');
					});
					//alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch(err => {
              console.log(err);
            })
        }
      }).render('#paypal-button-container');
    },200)
	
	}
	dismiss()
	{
	 this.modalController.dismiss({
      'dismissed': true
    });
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
	callstripe()
	{
	
		if(this.errors.indexOf(this.cardid)==-1)
			{
				
				if(this.errors.indexOf(this.action)==-1){
					
					let dict ={
							cardid:this.cardid,
							plan_id:this.planid,
							userid:this.userid,
							};
							this.common.presentLoading();
							this.api.post('update_monthly_Subscription', dict,'').subscribe((result) => {  
							this.common.stopLoading();
							var res;
							res = result;
							if(res.status==1){
							this.common.presentToast('Subscribed Successfully !.','success');
							this.dismiss();
							this.showthankyou();

							}else
							{
							this.common.presentToast(res.message,'danger');
							}
							},
							err => {
							this.common.stopLoading();
							this.common.presentToast('Some error occured','danger');
							});
				}else{
				let dict ={
							cardid:this.cardid,
							plan_id:this.planid,
							userid:this.userid,
							};
							this.common.presentLoading();
							this.api.post('add_monthly_Subscription', dict,'').subscribe((result) => {  
							this.common.stopLoading();
							var res;
							res = result;
							if(res.status==1){
							this.common.presentToast('Subscribed Successfully !.','success');
							this.dismiss();
							this.showthankyou();

							}else
							{
							this.common.presentToast(res.message,'danger');
							}
							},
							err => {
							this.common.stopLoading();
							this.common.presentToast('Some error occured','danger');
							});
							
				}
			}else
			{
			}
	}
	 async showthankyou(){
		const modal = await this.modalController.create({
		component: ThankyouPage,
		cssClass: 'leaveteam',
		componentProps: {
		
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		 
		}
		});
		return await modal.present();
		
	}
  ngOnInit() {
  }

}

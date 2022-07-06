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
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { ApplePay } from '@ionic-native/apple-pay/ngx';

@Component({
  selector: 'app-paymentlistmodal',
  templateUrl: './paymentlistmodal.page.html',
  styleUrls: ['./paymentlistmodal.page.scss'],
})
export class PaymentlistmodalPage implements OnInit {
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
userid:any;
paymentlist=[];
cardid:any;
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
  	this.charityid = navParams.get('charityid');
  	this.teamid = navParams.get('teamid');
  	this.actid = navParams.get('actid');
	this.amount = navParams.get('amount');
	this.userid = navParams.get('userid');
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
	this.listpayment();
	

	}
	 async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Apple Pay',
      subHeader: 'Payment with apple pay.',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

	async payWithApplePay() 
	{
	try {
      let order: any = {
        items: [
          {
            label:'Food For Life',
            amount: this.amount
          },
        ],
        shippingMethods: this.shippingMethods,
        merchantIdentifier: this.merchantIdentifier,
        currencyCode: this.currencyCode,
        countryCode: this.countryCode,
        billingAddressRequirement: this.billingAddressRequirement,
        shippingAddressRequirement: this.shippingAddressRequirement,
        shippingType: this.shippingType,
        merchantCapabilities: this.merchantCapabilities,
        supportedNetworks: this.supportedNetworks
      }
      this.applePay.makePaymentRequest(order).then(message => {
        console.log(message);
        this.applePay.completeLastTransaction('success');
      }).catch((error) => {
        console.log(error);
        this.applePay.completeLastTransaction('failure');
        this.presentAlert(error);
      });

      // In real payment, this step should be replaced by an actual payment call to payment provider
      // Here is an example implementation:

      // MyPaymentProvider.authorizeApplePayToken(token.paymentData)
      //    .then((captureStatus) => {
      //        // Displays the 'done' green tick and closes the sheet.
      //        ApplePay.completeLastTransaction('success');
      //    })
      //    .catch((err) => {
      //        // Displays the 'failed' red cross.
      //        ApplePay.completeLastTransaction('failure');
      //    });

    } catch {
      // handle payment request error
      // Can also handle stop complete transaction but these should normally not occur
    }
	}

  gpay()
   {
     const options = {
     action: this.webIntent.ACTION_VIEW,
     url: 'upi://pay?pa=7404172002@okbizaxis&pn=Food For Life &tid=esdsdfs&mc=&tr=25584584&am='+this.amount+'&cu=INR&tn=Donation Payment',
    // type: 'application/vnd.android.package-archive'
     }

     this.webIntent.startActivity(options).then(
       onSuccess => {
         console.log('onSuccess',onSuccess);
        
        alert('payment done');
       }
       , onError => {
            console.log('onError',onError);
       });

   } 
    launchUrl(){
      const options: AppLauncherOptions = {
      }
      
      options.uri = 'upi://pay?pa=7404172002@ybl&pn=HIIFIT&tid=esdsdfs&tr=deeefff&am=1&cu=INR&tn=Subscription Payment'
      
      this.appLauncher.canLaunch(options)
        .then((canLaunch: boolean) => console.log('Facebook is available'))
        .catch((error: any) => console.error('Facebook is not available'));
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

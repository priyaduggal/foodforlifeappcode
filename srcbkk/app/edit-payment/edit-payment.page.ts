import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { GlobalFooService } from '../services/globalFooService.service';
import { DeleteconfirmPage } from '../deleteconfirm/deleteconfirm.page';
@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.page.html',
  styleUrls: ['./edit-payment.page.scss'],
})
export class EditPaymentPage implements OnInit {
userid:any;
is_submit_payment:boolean=false;
name:any;
cvc:any;
card_number:any;
exp_date:any;
paymentid:any;
payment:any;
errors:any=['',null,undefined];
constructor(private globalFooService: GlobalFooService,public activatedRoute: ActivatedRoute,public api:ApiService, public router:Router,private common: CommonService) {
this.paymentid = activatedRoute.snapshot.paramMap.get('id');	
}

addcard()
  {
	this.is_submit_payment = true;
    if(this.errors.indexOf(this.name) >= 0 ||  this.errors.indexOf(this.card_number) >= 0 ||  this.errors.indexOf(this.cvc) >= 0 ||  this.errors.indexOf(this.exp_date) >= 0){
      return false;
    }
	if(this.errors.indexOf(this.userid)>=0 )
	{
		
        this.common.presentToast('Please login first!.','danger');
		return false;
	}
	  let dict ={
	  id:this.paymentid,
      name: this.name,
      card_number: this.card_number,
	  exp_date:this.exp_date,
      cvc: this.cvc,
	  userid:this.userid,
    };
        this.common.presentLoading();
  	 	this.api.post('UpdatePayment', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.common.presentToast('Updated Successfully !.','success');
		this.globalFooService.publishSomeData({
        set: {'data': res.status}
		});
		this.api.navCtrl.navigateRoot('/tabs/settings');
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
   ionViewDidEnter()
  {
	  this.userid=localStorage.getItem('userid');
	  this.getpaymentdetails();
  }
  getpaymentdetails()
  {
	   let dict ={
      id: this.paymentid,
    };
	   this.common.presentLoading();
  	 	this.api.post('paymentdetail', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
			this.payment=res.data;
			this.card_number=res.data.card_number;
			this.name=res.data.card_holder_name;
			this.exp_date=res.data.expiry_date;
			this.cvc=res.data.cvv;
			
		}else
        {
			
		}
		},
		err => {
             
        });
  }

}

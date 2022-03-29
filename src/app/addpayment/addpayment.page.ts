import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { GlobalFooService } from '../services/globalFooService.service';
@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.page.html',
  styleUrls: ['./addpayment.page.scss'],
})
export class AddpaymentPage implements OnInit {
userid:any;
is_submit_payment:boolean=false;
name:any;
cvc:any;
card_number:any;
exp_date:any;
errors:any=['',null,undefined];
  constructor(private globalFooService: GlobalFooService,
  public activatedRoute: ActivatedRoute,public api:ApiService
  , public router:Router,private common: CommonService) {}

  ngOnInit() {
  }
  
  ionViewDidEnter(){
  this.userid=localStorage.getItem('userid');
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
      name: this.name,
      card_number: this.card_number,
	  exp_date:this.exp_date,
      cvc: this.cvc,
	  userid:this.userid,
    };
        this.common.presentLoading();
  	 	this.api.post('AddPayment', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
				this.name = '';
				this.card_number = '';
				this.exp_date = '';
				this.cvc = '';
				this.common.presentToast('Added Successfully !.','success');
				this.globalFooService.publishSomeData({
            	set: {'data': res.status}
				
			    });
				this.api.navCtrl.navigateRoot('/tabs/settings');
				//this.router.navigate(['/tabs/settings']);
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
  
  }
}

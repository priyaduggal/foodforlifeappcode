import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.page.html',
  styleUrls: ['./deleteconfirm.page.scss'],
})
export class DeleteconfirmPage implements OnInit {
paymentid:any;
	constructor(public navParams: NavParams,public api:ApiService,public router:Router,private common: CommonService,public modalController: ModalController) {
	this.paymentid = navParams.get('paymentid');
	}

	ngOnInit() {
	}
	cancelok()
	{
	this.modalController.dismiss('deletedsuccessfully');
	}
	cancel()
	{
	this.modalController.dismiss();
	}
	delete()
	{
	let dict ={
	id:this.paymentid,
	};

	this.common.presentLoading();
	this.api.post('DeletePayment',dict,'').subscribe((result) => {  
	this.common.stopLoading();
	var res;
	res = result;
	if(res.status==1){
	this.common.presentToast('Payment method deleted successfully !.','success');
	this.cancelok();
	}else
	{
	this.common.presentToast(res.message,'danger');
	}
	},
	err => {

	});
}
	

}

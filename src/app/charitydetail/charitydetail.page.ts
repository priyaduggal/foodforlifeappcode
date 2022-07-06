import { Component,ViewChild, Input, Output, EventEmitter, OnInit,ElementRef } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {ActivatedRoute,Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import { AddamountPage } from '../addamount/addamount.page';
import { ModalController } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-charitydetail',
  templateUrl: './charitydetail.page.html',
  styleUrls: ['./charitydetail.page.scss'],
})
export class CharitydetailPage implements OnInit {
charityid:any;
@ViewChild('map', {static: false}) ionInput: { setFocus: () => void; };
charity:any;
IMAGES_URL:any = config.IMAGES_URL;
images:any;
percent:any;
donations=0;
errors:any=['',null,undefined];
tags:any;
constructor(public modalController: ModalController,public activatedRoute: ActivatedRoute,public api:ApiService, public router:Router,private common: CommonService) {
this.charityid = activatedRoute.snapshot.paramMap.get('id');
}

  ngOnInit() {
  }
  async give(id)
   {
	   const modal = await this.modalController.create({
		component: AddamountPage,
		cssClass: 'leaveteam',
		componentProps: {
		id:id,
		}
		});

		modal.onDidDismiss().then((detail) => {
		if(this.errors.indexOf(detail.data)==-1)
		{
		//this.team.joins=this.team.joins - 1;
		//this.getuserteams();
		}
 });
    return await modal.present();
   }
  
   ionViewDidEnter()
  {
	  this.getcharitydetails();
  }
     mapset(){
	var lati= this.charity.lat;
	var longi= this.charity.lng;
	const map = new google.maps.Map(
	document.getElementById("map") as HTMLElement,
	{
	center: { lat: parseFloat(lati), lng:parseFloat(longi) },
	zoom: 15,

	}


	);

  
  const marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: { lat: parseFloat(lati), lng:parseFloat(longi) },
    map: map,
  });

  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  const infowindow = new google.maps.InfoWindow({
    content: "<p>" +  this.charity.address + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });

  map.setTilt(45);

   }
  getcharitydetails()
  {
	  	let dict ={
		id: this.charityid,
		};
		this.common.presentLoading();
		this.api.post('charitydetail', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		if(this.errors.indexOf(res.data.tags)==-1)	{
		var string = res.data.tags;
		var strx   = string.split(',');
		var array  = [];
		array = array.concat(strx);	
		this.tags=array;
		}else{
			this.tags='';
		}
		
		
		this.charity=res.data;
		this.images=res.images;
		this.donations=res.donations;
		
		var listPrice = parseFloat(this.charity.goal_amount);
        var discount  = this.donations;
        var per=Math.round(((discount / listPrice) * 100)) / 100; 
		this.percent=per.toFixed(2);
		this.mapset();
		
		}else
		{

		}
		},
		err => {

		});

  }

}

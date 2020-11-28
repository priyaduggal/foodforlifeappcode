import { Component, OnInit } from '@angular/core';
import {ApiService } from '../services/api/api.service';
import {Router } from '@angular/router';
import { config } from '../config';
import {CommonService} from '../common/common.service';
import * as $ from 'jquery';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Crop } from '@ionic-native/crop/ngx';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
private win: any = window;
is_submit_update:boolean=false;
bgImage: any;
live_image_url: any;
is_live_image_updated_cover = false;
is_live_image_updated_profile = false;
image_type: any;
image_bg_type: any;
imgBlobProfile: any;
live_file_name_profile: any;
imgBlobCover: any;
live_file_name_cover: any;
errors:any=['',null,undefined];
userid:any;
donationlist=[];
userdetails:any;
IMAGES_URL:any = config.IMAGES_URL;
first_name:any;
last_name:any;
email:any;
address:any;
  constructor(public api:ApiService,
  public router:Router,
  private common: CommonService,
  private camera: Camera,
  private file: File,
  private filePath: FilePath,
  private transfer: FileTransfer) { }

  ngOnInit() {
  }
  getimage(img){
      if(this.errors.indexOf(img) == -1){
      if(img.includes('https') == true){
              return true;
            }else{
              return false;
            }
      }else{
        return false;
      }
    }
	async selectImage(type) {
  		this.image_type = type;
	    const actionSheet = await this.api.actionSheetController.create({
	      header: "Select Image",
	      buttons: [{
	            text: 'From Gallery',
	            handler: () => {
	                this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, type);
	            }
	        },
	        {
	            text: 'Use Camera',
	            handler: () => {
	                this.takePicture(this.camera.PictureSourceType.CAMERA, type);
	            }
	        },
	        {
	            text: 'Cancel',
	            role: 'cancel'
	        }
	      ]
	    });
	    await actionSheet.present();
	 }
	 takePicture(sourceType: PictureSourceType, type) {
	    
	    var options: CameraOptions = {
	        quality: 25,
	        sourceType: sourceType,
	        saveToPhotoAlbum: false,
	        correctOrientation: true,
	        allowEdit: true
	    };

	    this.camera.getPicture(options).then(imagePath => {
	      if (sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
	         
	          if(type == 'profile'){
	          	this.live_image_url = imagePath;
	          	 this.is_live_image_updated_profile = true;
	          }
	          

	          if(type == 'cover'){
	          	this.bgImage = this.win.Ionic.WebView.convertFileSrc(imagePath);
	          	 this.is_live_image_updated_cover = true;
	          }

	          
	          this.filePath.resolveNativePath(imagePath)
	              .then(filePath => {
	                this.startUpload(imagePath, type);
	              });
	      } else {
	        

	        if(type == 'profile'){
	          	this.live_image_url = imagePath;
	          	this.is_live_image_updated_profile = true;
          	}

	          if(type == 'cover'){
	          	this.bgImage = this.win.Ionic.WebView.convertFileSrc(imagePath);
	          	 this.is_live_image_updated_cover = true;
	          }
	        this.startUpload(imagePath, type);
	      }
	    }, (err) => {
	     console.log('err')
	     console.log(err)
	    });
	};

  ionViewDidEnter()
  {
	   this.userid=localStorage.getItem('userid');
	   this.getuserdetails();
  }
   startUpload(imageData, type) {
	    this.file.resolveLocalFilesystemUrl(imageData).then(entry => {
	        ( < FileEntry > entry).file(file => {
	        this.readFile(file, type)
	        })
	    })
	    .catch(err => {
	        this.common.presentToast('Error while reading file.','danger');
	    });
	  }
	  readFile(file: any, type) {
    var self = this;
    const reader = new FileReader();
    reader.onloadend = () => {
    	if(type == 'profile'){
    		const imgBlobProfile = new Blob([reader.result], {
	            type: file.type
	        });
	        self.imgBlobProfile = imgBlobProfile;
	        self.live_file_name_profile = file.name;
			self.profileImageSubmit(type);
			
    	}else{
    		const imgBlobCover = new Blob([reader.result], {
	            type: file.type
	        });
	        self.imgBlobCover = imgBlobCover;
	        self.live_file_name_cover = file.name;
    	}

        // const imgBlob = new Blob([reader.result], {
        //     type: file.type
        // });
        // self.imgBlob = imgBlob;
        // self.live_file_name = file.name;
       
        //self.profileImageSubmit(type);
    };
    reader.readAsArrayBuffer(file);
  }
  
  
  profileImageSubmit(type){
	    // this.apiService.presentLoading();
	    const frmData = new FormData();

		frmData.append('file', this.imgBlobProfile, this.live_file_name_profile);
		frmData.append("live_image", this.live_file_name_profile.replace(/ /g,"_")); 
		frmData.append("userId", localStorage.getItem('userid'));
		frmData.append("type", type);
	  
	    this.api.post('update_user_image',frmData,'').subscribe((result) => { 
	    var res;
		res = result;
		if(res.status==1){  
	      
	      		this.userdetails.image = res.data;
	      		this.is_live_image_updated_profile = false;
	      }
	      else{
	        this.common.presentToast('Error while sending request,Please try after some time','success');
	      }
	    },
	    err => {
	        this.common.presentToast('Technical error,Please try after some time','success');
	    });
  	}

  	
  getuserdetails()
  {
	  let dict ={
		id: this.userid
		};
		this.common.presentLoading();
  	 	this.api.post('Userdetails', dict,'').subscribe((result) => {  
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		this.userdetails=res.data;
		this.donationlist=res.donations;
		this.common.presentToast(res.message,'success');
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
  }


	update()
	{
    this.is_submit_update = true;
    if(this.errors.indexOf(this.first_name) >= 0 ||  this.errors.indexOf(this.last_name) >= 0 ||  this.errors.indexOf(this.email) >= 0 ||  this.errors.indexOf(this.address) >= 0){
      return false;
    }
	 let dict ={
      first_name: this.first_name,
      last_name: this.last_name,
	  email:this.email,
	  address:this.address,
	  id:this.userid,
    };
	
	this.common.presentLoading();
		this.api.post('updateUserDetails', dict,'').subscribe((result) => {  
		this.is_submit_update = false;
		this.common.stopLoading();
		var res;
		res = result;
		if(res.status==1){
		$('.name').text(this.first_name+' '+this.last_name);
		this.common.presentToast('Updated successfully !.','success');
		}else
		{
		this.common.presentToast(res.message,'danger');
		}
        },
        err => {
             
        });
 

	}
}
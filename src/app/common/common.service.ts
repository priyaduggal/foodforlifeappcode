import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading:any;
  constructor( 
    private toastController: ToastController,
    private loadingController: LoadingController
    ) { }

    async presentToast(message,color) {
      const toast = await this.toastController.create({
        message: message,
        duration: 5000,
        position: 'bottom',
        color: color,
        //showCloseButton: true,
        mode:"ios"
      });
      toast.present();
    }

  async presentLoading() {
    this.loading = await this.loadingController.create({
          mode:"ios"
    });
      await this.loading.present();
  }

  async stopLoading() {
    if(this.loading != undefined){
      await this.loading.dismiss();
    }
    else{
      var self = this;
      setTimeout(function(){
        self.stopLoading();
      },1000);
    }
  }
}

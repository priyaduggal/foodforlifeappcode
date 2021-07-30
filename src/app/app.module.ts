import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { JointeamconfirmPage } from './jointeamconfirm/jointeamconfirm.page';
import { PaymentlistmodalPage } from './paymentlistmodal/paymentlistmodal.page';
import { LeaveteamconfirmPage } from './leaveteamconfirm/leaveteamconfirm.page';
import { CustomamountPage } from './customamount/customamount.page';

import {  social_config } from './config';
import { DeleteconfirmPage } from './deleteconfirm/deleteconfirm.page';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';



@NgModule({
  declarations: [AppComponent,JointeamconfirmPage,LeaveteamconfirmPage,DeleteconfirmPage,PaymentlistmodalPage,CustomamountPage],
  entryComponents: [JointeamconfirmPage,LeaveteamconfirmPage,DeleteconfirmPage,PaymentlistmodalPage,CustomamountPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
	Camera,
    File,
    FilePath,
    FileTransfer,
	Facebook,
    GooglePlus, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialshareoptionsPageRoutingModule } from './socialshareoptions-routing.module';

import { SocialshareoptionsPage } from './socialshareoptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialshareoptionsPageRoutingModule
  ],
  declarations: [SocialshareoptionsPage]
})
export class SocialshareoptionsPageModule {}

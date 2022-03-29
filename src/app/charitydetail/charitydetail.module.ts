import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharitydetailPageRoutingModule } from './charitydetail-routing.module';

import { CharitydetailPage } from './charitydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharitydetailPageRoutingModule
  ],
  declarations: [CharitydetailPage]
})
export class CharitydetailPageModule {}

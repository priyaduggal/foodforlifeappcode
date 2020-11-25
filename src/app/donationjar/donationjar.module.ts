import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationjarPageRoutingModule } from './donationjar-routing.module';

import { DonationjarPage } from './donationjar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationjarPageRoutingModule
  ],
  declarations: [DonationjarPage]
})
export class DonationjarPageModule {}

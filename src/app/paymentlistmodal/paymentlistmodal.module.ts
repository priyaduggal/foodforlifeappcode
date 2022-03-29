import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentlistmodalPageRoutingModule } from './paymentlistmodal-routing.module';

import { PaymentlistmodalPage } from './paymentlistmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentlistmodalPageRoutingModule
  ],
  declarations: [PaymentlistmodalPage]
})
export class PaymentlistmodalPageModule {}

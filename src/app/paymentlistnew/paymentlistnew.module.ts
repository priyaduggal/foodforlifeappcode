import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentlistnewPageRoutingModule } from './paymentlistnew-routing.module';

import { PaymentlistnewPage } from './paymentlistnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentlistnewPageRoutingModule
  ],
  declarations: [PaymentlistnewPage]
})
export class PaymentlistnewPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomamountPageRoutingModule } from './customamount-routing.module';

import { CustomamountPage } from './customamount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomamountPageRoutingModule
  ],
  declarations: [CustomamountPage]
})
export class CustomamountPageModule {}

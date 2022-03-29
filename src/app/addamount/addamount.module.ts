import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddamountPageRoutingModule } from './addamount-routing.module';

import { AddamountPage } from './addamount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddamountPageRoutingModule
  ],
  declarations: [AddamountPage]
})
export class AddamountPageModule {}

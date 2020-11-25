import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThetabledetailPageRoutingModule } from './thetabledetail-routing.module';

import { ThetabledetailPage } from './thetabledetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThetabledetailPageRoutingModule
  ],
  declarations: [ThetabledetailPage]
})
export class ThetabledetailPageModule {}

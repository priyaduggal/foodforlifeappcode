import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThetablePageRoutingModule } from './thetable-routing.module';

import { ThetablePage } from './thetable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThetablePageRoutingModule
  ],
  declarations: [ThetablePage]
})
export class ThetablePageModule {}

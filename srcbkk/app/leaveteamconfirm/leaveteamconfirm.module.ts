import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveteamconfirmPageRoutingModule } from './leaveteamconfirm-routing.module';

import { LeaveteamconfirmPage } from './leaveteamconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveteamconfirmPageRoutingModule
  ],
  declarations: [LeaveteamconfirmPage]
})
export class LeaveteamconfirmPageModule {}

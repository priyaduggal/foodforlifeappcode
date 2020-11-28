import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JointeamconfirmPageRoutingModule } from './jointeamconfirm-routing.module';

import { JointeamconfirmPage } from './jointeamconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JointeamconfirmPageRoutingModule
  ],
  declarations: [JointeamconfirmPage]
})
export class JointeamconfirmPageModule {}

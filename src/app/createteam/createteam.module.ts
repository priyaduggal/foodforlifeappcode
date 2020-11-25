import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateteamPageRoutingModule } from './createteam-routing.module';

import { CreateteamPage } from './createteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateteamPageRoutingModule
  ],
  declarations: [CreateteamPage]
})
export class CreateteamPageModule {}

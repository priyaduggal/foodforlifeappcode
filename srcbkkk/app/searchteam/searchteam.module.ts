import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchteamPageRoutingModule } from './searchteam-routing.module';

import { SearchteamPage } from './searchteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchteamPageRoutingModule
  ],
  declarations: [SearchteamPage]
})
export class SearchteamPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcardsPageRoutingModule } from './showcards-routing.module';

import { ShowcardsPage } from './showcards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcardsPageRoutingModule
  ],
  declarations: [ShowcardsPage]
})
export class ShowcardsPageModule {}

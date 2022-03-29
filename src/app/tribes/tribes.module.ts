import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TribesPageRoutingModule } from './tribes-routing.module';

import { TribesPage } from './tribes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TribesPageRoutingModule
  ],
  declarations: [TribesPage]
})
export class TribesPageModule {}

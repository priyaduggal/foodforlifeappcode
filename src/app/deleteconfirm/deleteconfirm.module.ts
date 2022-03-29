import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteconfirmPageRoutingModule } from './deleteconfirm-routing.module';

import { DeleteconfirmPage } from './deleteconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteconfirmPageRoutingModule
  ],
  declarations: [DeleteconfirmPage]
})
export class DeleteconfirmPageModule {}

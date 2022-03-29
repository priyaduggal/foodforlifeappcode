import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentlistmodalPage } from './paymentlistmodal.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentlistmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentlistmodalPageRoutingModule {}

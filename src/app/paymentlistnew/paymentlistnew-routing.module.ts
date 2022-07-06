import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentlistnewPage } from './paymentlistnew.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentlistnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentlistnewPageRoutingModule {}

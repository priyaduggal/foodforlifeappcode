import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomamountPage } from './customamount.page';

const routes: Routes = [
  {
    path: '',
    component: CustomamountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomamountPageRoutingModule {}

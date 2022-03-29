import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddamountPage } from './addamount.page';

const routes: Routes = [
  {
    path: '',
    component: AddamountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddamountPageRoutingModule {}

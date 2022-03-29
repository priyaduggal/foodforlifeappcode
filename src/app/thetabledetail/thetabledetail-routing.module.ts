import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThetabledetailPage } from './thetabledetail.page';

const routes: Routes = [
  {
    path: '',
    component: ThetabledetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThetabledetailPageRoutingModule {}

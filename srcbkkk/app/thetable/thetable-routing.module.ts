import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThetablePage } from './thetable.page';

const routes: Routes = [
  {
    path: '',
    component: ThetablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThetablePageRoutingModule {}

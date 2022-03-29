import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveteamconfirmPage } from './leaveteamconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveteamconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveteamconfirmPageRoutingModule {}

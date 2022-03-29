import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JointeamconfirmPage } from './jointeamconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: JointeamconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JointeamconfirmPageRoutingModule {}

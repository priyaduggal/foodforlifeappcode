import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateteamPage } from './createteam.page';

const routes: Routes = [
  {
    path: '',
    component: CreateteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateteamPageRoutingModule {}

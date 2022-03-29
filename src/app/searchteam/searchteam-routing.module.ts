import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchteamPage } from './searchteam.page';

const routes: Routes = [
  {
    path: '',
    component: SearchteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchteamPageRoutingModule {}

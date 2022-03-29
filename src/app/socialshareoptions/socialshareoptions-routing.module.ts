import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialshareoptionsPage } from './socialshareoptions.page';

const routes: Routes = [
  {
    path: '',
    component: SocialshareoptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialshareoptionsPageRoutingModule {}

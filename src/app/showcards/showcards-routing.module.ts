import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcardsPage } from './showcards.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcardsPageRoutingModule {}

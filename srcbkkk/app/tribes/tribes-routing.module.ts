import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TribesPage } from './tribes.page';

const routes: Routes = [
  {
    path: '',
    component: TribesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TribesPageRoutingModule {}

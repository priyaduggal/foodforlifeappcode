import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteconfirmPage } from './deleteconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteconfirmPageRoutingModule {}

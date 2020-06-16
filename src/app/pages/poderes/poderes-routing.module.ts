import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoderesPage } from './poderes.page';

const routes: Routes = [
  {
    path: '',
    component: PoderesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoderesPageRoutingModule {}

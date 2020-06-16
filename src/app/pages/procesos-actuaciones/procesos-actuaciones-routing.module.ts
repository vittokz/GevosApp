import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesosActuacionesPage } from './procesos-actuaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesosActuacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesosActuacionesPageRoutingModule {}

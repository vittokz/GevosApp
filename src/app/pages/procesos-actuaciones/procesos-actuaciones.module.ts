import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesosActuacionesPageRoutingModule } from './procesos-actuaciones-routing.module';

import { ProcesosActuacionesPage } from './procesos-actuaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ProcesosActuacionesPageRoutingModule
  ],
  declarations: [ProcesosActuacionesPage]
})
export class ProcesosActuacionesPageModule {}

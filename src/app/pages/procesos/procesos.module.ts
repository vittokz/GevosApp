import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesosPageRoutingModule } from './procesos-routing.module';

import { ProcesosPage } from './procesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProcesosPageRoutingModule
  ],
  declarations: [ProcesosPage]
})
export class ProcesosPageModule {}

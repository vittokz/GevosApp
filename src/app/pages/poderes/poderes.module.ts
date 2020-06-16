import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoderesPageRoutingModule } from './poderes-routing.module';

import { PoderesPage } from './poderes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ComponentsModule,
    PoderesPageRoutingModule
  ],
  declarations: [PoderesPage]
})
export class PoderesPageModule {}

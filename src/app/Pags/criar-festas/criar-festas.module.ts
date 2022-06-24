import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarFestasPageRoutingModule } from './criar-festas-routing.module';

import { CriarFestasPage } from './criar-festas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarFestasPageRoutingModule
  ],
  declarations: [CriarFestasPage]
})
export class CriarFestasPageModule {}

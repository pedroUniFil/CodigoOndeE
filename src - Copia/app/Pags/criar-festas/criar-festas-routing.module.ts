import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarFestasPage } from './criar-festas.page';

const routes: Routes = [
  {
    path: '',
    component: CriarFestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarFestasPageRoutingModule {}

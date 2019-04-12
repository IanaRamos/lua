import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaseMinguantePage } from './fase-minguante.page';

const routes: Routes = [
  {
    path: '',
    component: FaseMinguantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaseMinguantePage]
})
export class FaseMinguantePageModule {}

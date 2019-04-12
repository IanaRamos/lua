import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaseCrescentePage } from './fase-crescente.page';

const routes: Routes = [
  {
    path: '',
    component: FaseCrescentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaseCrescentePage]
})
export class FaseCrescentePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengModule } from '../primeng-modules/primeng.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }

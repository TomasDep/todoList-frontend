import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng-modules/primeng.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }

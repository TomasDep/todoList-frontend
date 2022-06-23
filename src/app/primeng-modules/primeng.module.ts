import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';

const modules = [
  CardModule,
  InputTextModule,
  ButtonModule,
  RippleModule,
  SidebarModule,
  FieldsetModule,
  DialogModule
]

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class PrimengModule { }

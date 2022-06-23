import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrimengModule } from '../primeng-modules/primeng.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }

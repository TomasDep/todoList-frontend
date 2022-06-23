import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PrimengModule } from './primeng-modules/primeng.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

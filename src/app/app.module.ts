import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WhatIsCdComponent } from './whatIsChangeDetection/whatIsCd.component';

import { NotificationService } from './notification.service';

@NgModule({
  declarations: [
    AppComponent,
    WhatIsCdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

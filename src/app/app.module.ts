import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from 'app/app.component';
import { WhatIsCdModule } from 'app/whatIsChangeDetection/whatIsCd.module';
import { WhatIsCdComponent } from 'app/whatIsChangeDetection/whatIsCd.component';
import { WhatCauseChangeModule } from 'app/whatCauseChange/whatCauseChange.module';
import { WhatCauseChangeComponent } from 'app/whatCauseChange/whatCauseChange.component';
import { FlashNewsModule } from 'app/flashNews/flashNews.module';
import { FlashNewsComponent } from 'app/flashNews/flashNews.component';
import { NotificationService } from 'app/notification.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/whatIsChangeDetection',
    pathMatch: 'full',
  },
  {
    path: 'whatIsChangeDetection',
    component: WhatIsCdComponent
  },
  {
    path: 'whatCauseChange',
    component: WhatCauseChangeComponent
  },
  {
    path: 'flashNews',
    component: FlashNewsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    WhatIsCdModule,
    WhatCauseChangeModule,
    FlashNewsModule
  ],
  providers: [NotificationService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

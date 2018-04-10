import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component'


enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ {provide: APP_BASE_HREF, useValue:"/"} ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

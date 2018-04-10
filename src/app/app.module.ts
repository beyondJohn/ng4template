import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { AuthService } from '../app/services/auth.service';
import { RedundantComponent } from './redundant/redundant.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    RedundantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ {provide: APP_BASE_HREF, useValue:"/"} ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

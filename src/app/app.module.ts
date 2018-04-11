import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component'


enableProdMode();

const appRoutes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
    data: { title: 'Info' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  }];
@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  // providers: [{ provide: APP_BASE_HREF, useValue: "./" }],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

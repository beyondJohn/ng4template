import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

enableProdMode();
const appRoutes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
    data: { title: 'Info', animation:'info' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', animation:'home' }
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
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './homepage/homepage.component';
import { NgrxFormtoComponent } from './ngrx-formto/ngrx-formto.component';
import { FormtoComponent } from './modules/formto/formto.component';
import { IntervalComponent } from './modules/interval/interval.component';
import { OfFromComponent } from './modules/of-from/of-from.component';
import { ToarrayComponent } from './modules/toarray/toarray.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from './modules/map/map.component';
import { PluckComponent } from './modules/pluck/pluck.component';
import { FilterComponent } from './modules/filter/filter.component';
import { TapComponent } from './modules/tap/tap.component';
import { SubjectComponent } from './modules/subject/subject.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { TakeComponent } from './modules/take/take.component';
import { RetryComponent } from './modules/retry/retry.component';
import { DebounceComponent } from './modules/debounce/debounce.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserloginComponent,
    HeaderComponent,
    HomepageComponent,
    NgrxFormtoComponent,
    FormtoComponent,
    IntervalComponent,
    OfFromComponent,
    ToarrayComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    TakeComponent,
    RetryComponent,
    DebounceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

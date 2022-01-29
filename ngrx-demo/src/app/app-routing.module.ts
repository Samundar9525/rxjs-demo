import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CustomObserableComponent } from './modules/custom-obserable/custom-obserable.component';
import { DebounceComponent } from './modules/debounce/debounce.component';
import { FilterComponent } from './modules/filter/filter.component';
import { IntervalComponent } from './modules/interval/interval.component';
import { MapComponent } from './modules/map/map.component';
import { OfFromComponent } from './modules/of-from/of-from.component';
import { PluckComponent } from './modules/pluck/pluck.component';
import { RetryComponent } from './modules/retry/retry.component';
import { SubjectComponent } from './modules/subject/subject.component';
import { TakeComponent } from './modules/take/take.component';
import { TapComponent } from './modules/tap/tap.component';
import { ToarrayComponent } from './modules/toarray/toarray.component';
import { NgrxFormtoComponent } from './ngrx-formto/ngrx-formto.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: "users", component: UserloginComponent },
  {path: "homepage",component: HomepageComponent},
  {path: "login",component: LoginComponent},
  {path: "fromto",component: NgrxFormtoComponent},
  {path: "interval",component: IntervalComponent},
  {path: "offrom",component: OfFromComponent},
  {path: "toarray",component: ToarrayComponent},
  {path: "customovserable",component:CustomObserableComponent},
  {path: "maps",component:MapComponent},
  {path: "pluck",component:PluckComponent},
  {path: "filter",component:FilterComponent},
  {path: "tap",component:TapComponent},
  {path: "subject",component:SubjectComponent},
  {path: "take",component:TakeComponent},
  {path: "retry",component:RetryComponent},
  {path: "debounce",component:DebounceComponent},

  {path: "**",redirectTo: "homepage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

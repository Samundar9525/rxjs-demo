import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ConcatComponent } from './modules/concat/concat.component';
import { ConcatmapComponent } from './modules/concatmap/concatmap.component';
import { CustomObserableComponent } from './modules/custom-obserable/custom-obserable.component';
import { DebounceComponent } from './modules/debounce/debounce.component';
import { FilterComponent } from './modules/filter/filter.component';
import { IntervalComponent } from './modules/interval/interval.component';
import { Login2Component } from './modules/login2/login2.component';
import { MapComponent } from './modules/map/map.component';
import { MergeComponent } from './modules/merge/merge.component';
import { MergemapComponent } from './modules/mergemap/mergemap.component';
import { OfFromComponent } from './modules/of-from/of-from.component';
import { PluckComponent } from './modules/pluck/pluck.component';
import { RegisterationComponent } from './modules/registeration/registeration.component';
import { ReplayComponent } from './modules/replay/replay.component';
import { RetryComponent } from './modules/retry/retry.component';
import { SignupComponent } from './modules/signup/signup.component';
import { SubjectComponent } from './modules/subject/subject.component';
import { TakeComponent } from './modules/take/take.component';
import { TapComponent } from './modules/tap/tap.component';
import { ToarrayComponent } from './modules/toarray/toarray.component';
import { NgrxFormtoComponent } from './ngrx-formto/ngrx-formto.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path: "users", component: UserloginComponent },
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
  {path: "replay",component:ReplayComponent},
  {path: "merge",component:MergeComponent},
  {path: "concat",component:ConcatComponent},
  {path: "dashboard",component:StudentdashboardComponent},
  {path: "loginform",component:Login2Component},
  {path: "signupform",component:SignupComponent},
  {path: "registrationform",component:RegisterationComponent},
  {path: "mergemap",component:MergemapComponent},
  {path: "concatmap",component:ConcatmapComponent},

  {path: "**",redirectTo: "homepage"} //this is wildcard it will redirect you to always homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

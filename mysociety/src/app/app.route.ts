import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FeaturesComponent } from './features/features.component';
import { AuthGuard } from './auth.guard';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LandingComponent } from './landing/landing.component';
import { LockComponent } from './lock/lock.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';

const appRoute: Routes = [
  { path: '', component: PublicLayoutComponent,
    children:[
      { path: 'register', component: RegisterComponent},
      { path:'forgotpassword', component:ForgotpasswordComponent},
      { path:'login', component: LoginComponent},
      { path: '', component:LandingComponent },
    ]},
    { path:'', component: AppLayoutComponent,
    children:[
      { path: 'home', component: HomeComponent},
      { path: 'features', component: FeaturesComponent},
      { path:'404', component: FourComponent},
      { path:'500', component: FiveComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
  ],canActivateChild:[AuthGuard]},
  { path: 'lock', component:LockComponent },
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute, {enableTracing: false})
  ],
  exports: [ RouterModule ]
})
export class AppRoute { }

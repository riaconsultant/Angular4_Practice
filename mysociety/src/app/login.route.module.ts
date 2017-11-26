import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const loginroute: Routes =[
  {path:'login',component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(loginroute,{enableTracing:true})
  ],
  declarations: []
})

export class LoginRouteModule { }


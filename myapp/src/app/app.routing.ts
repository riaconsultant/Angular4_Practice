import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { HomeOrgComponent } from './home-org/home-org.component';
import { EmployeeComponent } from './employee/employee.component';

const appRoute:Routes=[
    {path:"login", component: LoginComponent},
    {path:"home", component: HomeComponent},
    {path:"register", component: RegisterComponent},
    {path:"users",component: UsersComponent,data:{title:"UserList"}},
    {path:"users/:code", component:EmployeeComponent},
    {path:"details/:id", component:ProfileDetailComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
  ]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoute,{enableTracing:false})
    ],
    exports : [RouterModule]
})

export class AppRouting {}



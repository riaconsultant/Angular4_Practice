import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustompipePipe } from './custompipe.pipe';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouting } from './app.routing';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeOrgComponent } from './home-org/home-org.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { CustomserviceService } from './customservice.service';
import { UsercountComponent } from './usercount/usercount.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserpreferanceService } from './userpreferance.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileDetailComponent,
    UsersComponent,
    NavComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeNavComponent,
    HomeOrgComponent,
    HomeProfileComponent,
    UsercountComponent,
    CustompipePipe,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [ CustomserviceService,UserpreferanceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

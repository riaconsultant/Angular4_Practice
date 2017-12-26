import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoute } from './app.route';
import { FeaturesComponent } from './features/features.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { NavComponent } from './nav/nav.component';
import { NotifCardComponent } from './home/notif-card/notif-card.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FeaturesComponent,
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SettingsComponent,
    NavComponent,
    NotifCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,

  ],
  providers: [ProfileService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

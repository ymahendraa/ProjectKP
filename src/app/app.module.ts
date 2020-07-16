import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './page/register/register.component';
import { MainMenuComponent } from './page/main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './page/navbar/navbar.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { DeviceDetailsComponent } from './page/device-details/device-details.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './page/register-user/register-user.component';
import { UserDetailsComponent } from './page/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainMenuComponent,
    NavbarComponent,
    NotFoundComponent,
    DeviceDetailsComponent,
    RegisterUserComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      { path: 'dashboard',
        component: MainMenuComponent,
      },
      { path: 'register-user',
        component: RegisterUserComponent,
      },
      { path: 'register-device/:id',
        component: RegisterComponent 
      },
      {
        path:'device/:id',
        component: DeviceDetailsComponent
      },
      {
        path:'user/:id',
        component: UserDetailsComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

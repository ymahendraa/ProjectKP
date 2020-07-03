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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainMenuComponent,
    NavbarComponent,
    NotFoundComponent,
    DeviceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo:'devices',
        pathMatch:'full'
      },
      { path: 'devices',
        component: MainMenuComponent,
      },
      { path: 'register',
        component: RegisterComponent 
      },
      {
        path:'devices/:id',
        component: DeviceDetailsComponent
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

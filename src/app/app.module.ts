import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameComponent } from './user/user-name/user-name.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { ButtonComponent } from './user/button/button.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UserinformationService } from './userinformation.service';

@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    UserDetailsComponent,
    UserComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserinformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

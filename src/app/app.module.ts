import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoursesModule} from './course/courses.module';
import {CoursesService} from './services/courses.service';
import {AuthService} from './services/auth.service';
import {LoginPageModule} from './login-page/login-page.module';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {NotFoundModule} from "./not-found/not-found.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginPageModule,
    HttpClientModule,
    NotFoundModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [CoursesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

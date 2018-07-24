import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {BreadcrumbsModule} from './breadcrumbs/breadcrumbs.module';
import {SearchBoxModule} from './search-box/search-box.module';
import {FooterModule} from './footer/footer.module';
import {CoursesModule} from './course/courses.module';
import {CoursesService} from './services/courses.service';
import {AuthService} from './services/auth.service';
import {LoginPageModule} from './login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BreadcrumbsModule,
    SearchBoxModule,
    FooterModule,
    CoursesModule,
    LoginPageModule,
  ],
  providers: [CoursesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

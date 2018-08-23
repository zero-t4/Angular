import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesModule } from './course/courses.module';
import { CoursesService } from './services/courses.service';
import { AuthService } from './services/auth.service';
import { LoginPageModule } from './login-page/login-page.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NotFoundModule } from './not-found/not-found.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import {LoaderModule} from "./loader/loader.module";
import {LoaderInterceptor} from "./services/loader.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginPageModule,
    HttpClientModule,
    NotFoundModule,
    LoaderModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [
    CoursesService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

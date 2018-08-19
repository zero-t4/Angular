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
import { StoreModule } from '@ngrx/store';
import { authReducer } from "./redux/auth.reducer";
import {coursesReducer} from "./redux/courses.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginPageModule,
    HttpClientModule,
    NotFoundModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    StoreModule.forRoot({
      auth: authReducer,
      courses: coursesReducer,
    }),
  ],
  providers: [
    CoursesService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

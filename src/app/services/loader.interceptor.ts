import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {LoaderService} from "./loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, private loaderService: LoaderService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getUserToken()}`
      }
    });
    return next.handle(request).pipe(
      tap(el => {
        this.loaderService.hide();
        return console.log(el);
      })
    );
  }
}

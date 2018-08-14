import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CanActivateIsAuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.authService);

    return this.authService.getSource().pipe(
      map(el => {
        return Boolean(el.token);
      })
    )
  }
}

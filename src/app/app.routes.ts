import {Route} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {NotFoundComponent} from "./not-found/not-found/not-found.component";
import {CoursesComponent} from "./course/courses/courses.component";
import {AddEditPageComponent} from "./course/add-edit-page/add-edit-page.component";
import {CanActivateIsAuthenticatedGuard} from './guards/can-activate-is-authenticated-guard.service';

export const ROUTES:Route[] = [
  // REDIRECTS
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },



  // PATHS
  {
    path: 'courses',
    component: CoursesComponent,
    // In order to make redirect to login page if not authenticated
    // canActivate: [CanActivateIsAuthenticatedGuard]
  },
  {
    path: 'courses/:id',
    component: AddEditPageComponent,
    canActivate: [CanActivateIsAuthenticatedGuard]
  },
  {
    path: 'courses/new',
    component: AddEditPageComponent,
    canActivate: [CanActivateIsAuthenticatedGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },



  // 404 page
  {
    path: '**',
    component: NotFoundComponent,
  },
];

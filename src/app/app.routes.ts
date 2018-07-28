import {Route} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {NotFoundComponent} from "./not-found/not-found/not-found.component";
import {CoursesComponent} from "./course/courses/courses.component";
import {AddEditPageComponent} from "./course/add-edit-page/add-edit-page.component";
import {CanActivateCoursesGuard} from './guards/can-activate-courses.guard';

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
    // canActivate: [CanActivateCoursesGuard]
  },
  {
    path: 'courses/:id',
    component: AddEditPageComponent
  },
  {
    path: 'courses/new',
    component: AddEditPageComponent
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

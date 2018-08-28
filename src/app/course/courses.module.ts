import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import {ColorHighlightDirective} from '../directives/color-bind.directive';
import {DurationPipe} from '../pipes/duration.pipe';
import {OrderByPipe} from '../pipes/order-by.pipe';
import { AddEditPageComponent } from './add-edit-page/add-edit-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoursesComponent} from "./courses/courses.component";
import {HeaderModule} from "../header/header.module";
import {BreadcrumbsModule} from "../breadcrumbs/breadcrumbs.module";
import {SearchBoxModule} from "../search-box/search-box.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    BreadcrumbsModule,
    SearchBoxModule,
    FooterModule,
  ],
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    ColorHighlightDirective,
    DurationPipe,
    OrderByPipe,
    AddEditPageComponent,
    CoursesComponent
  ],
  exports: [
    CoursesComponent,
    CourseListComponent,
    AddEditPageComponent,
  ]
})
export class CoursesModule { }

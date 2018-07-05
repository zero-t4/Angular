import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import {ColorHighlightDirective} from '../directives/color-bind.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    ColorHighlightDirective
  ],
  exports: [CourseListComponent]
})
export class CoursesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListComponent, CourseItemComponent],
  exports: [CourseListComponent]
})
export class CoursesModule { }

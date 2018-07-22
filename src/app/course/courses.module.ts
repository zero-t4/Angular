import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import {ColorHighlightDirective} from '../directives/color-bind.directive';
import {DurationPipePipe} from '../pipes/duration-pipe.pipe';
import {OrderByPipe} from '../pipes/order-by.pipe';
import { AddEditPageComponent } from './add-edit-page/add-edit-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    ColorHighlightDirective,
    DurationPipePipe,
    OrderByPipe,
    AddEditPageComponent,
  ],
  exports: [CourseListComponent, AddEditPageComponent]
})
export class CoursesModule { }

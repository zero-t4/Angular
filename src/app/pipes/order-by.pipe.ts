import { Pipe, PipeTransform } from '@angular/core';
import {ICourseItemModel} from '../course/course-item/course-item.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(allCourses: ICourseItemModel[], args?: string): ICourseItemModel[] {
    console.log('called', allCourses);
    allCourses.sort((a: ICourseItemModel, b: ICourseItemModel): number => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
    );
    return allCourses;
  }
}

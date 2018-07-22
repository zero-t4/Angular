import { Pipe, PipeTransform } from '@angular/core';
import {isNaN} from 'lodash';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipe implements PipeTransform {

  public transform(duration: number = 0, args?: any): string {
    const hours = Math.floor( duration / 60);
    if (isNaN(hours)) return '';
    const minutes = duration % 60;
    return `${hours ? hours + 'h ' : ''}${minutes}min`;
  }

}

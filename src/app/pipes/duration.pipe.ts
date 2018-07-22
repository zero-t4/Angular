import { Pipe, PipeTransform } from '@angular/core';
import {isNumber} from 'lodash';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipe implements PipeTransform {

  public transform(duration: number, args?: any): string {
    if (!isNumber(duration)) return '';

    const hours = Math.floor( duration / 60);
    const minutes = duration % 60;
    return `${hours ? hours + 'h ' : ''}${minutes}min`;
  }

}

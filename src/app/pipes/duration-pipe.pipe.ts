import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipePipe implements PipeTransform {

  public transform(duration: number, args?: any): string {
    const hours = Math.floor( duration / 60);
    const minutes = duration % 60;
    return `${hours ? hours + 'h ' : ''}${minutes}min`;
  }

}

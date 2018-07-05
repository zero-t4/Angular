import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appColorHighlightBind]'
})
export class ColorHighlightDirective {
  @Input('appColorHighlightBind') date: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(this.date);
    const creationDate = new Date(this.date);
    const currentDate = new Date();
    const element = this.el.nativeElement;

    const isFreshCourse = creationDate.getTime() < currentDate.getTime() &&
      creationDate.getTime() >= currentDate.setDate(currentDate.getDate() - 14);
    const isUpcomingCourse = creationDate.getTime() > currentDate.getTime();

    if (isFreshCourse) {
      this.renderer.setStyle(element, 'border', '1px solid green');
    } else if (isUpcomingCourse) {
      this.renderer.setStyle(element, 'border', '1px solid aqua');
    }
  }
}

import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorHighlightBind]'
})
export class ColorHighlightDirective implements OnInit {
  @Input('appColorHighlightBind') date: string;

  ngOnInit() {
    const creationDate = new Date(this.date);
    const currentDate = new Date();
    const element = this.el.nativeElement.querySelector('div');

    const isFreshCourse = creationDate.getTime() < currentDate.getTime() &&
      creationDate.getTime() >= currentDate.setDate(currentDate.getDate() - 14);
    const isUpcomingCourse = creationDate.getTime() > currentDate.getTime();

    if (isFreshCourse) {
      this.renderer.setStyle(element, 'border', '1px solid green');
    } else if (isUpcomingCourse) {
      this.renderer.setStyle(element, 'border', '1px solid aqua');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}

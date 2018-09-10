import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInput),
    multi: true
  }]
})
export class DateInput implements OnInit, ControlValueAccessor {
  @Input()
  public creationDate: Date;

  constructor() { }

  ngOnInit() {
  }

  public writeValue(date: Date) {
    this.creationDate = date;
  }

  public registerOnChange(changedHandler: any) { }

  public registerOnTouched() { }
}

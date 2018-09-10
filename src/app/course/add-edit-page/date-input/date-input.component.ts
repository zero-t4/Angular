import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputComponent),
    multi: true
  }]
})
export class DateInputComponent implements  OnInit, ControlValueAccessor {
  @Input()
  public creationDate: Date;

  constructor() { }

  ngOnInit() { }

  public writeValue(creationDate: Date) {
    this.creationDate = creationDate;
  }

  public registerOnChange() { }

  public registerOnTouched() { }
}

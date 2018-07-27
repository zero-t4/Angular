import { ColorHighlightDirective } from './color-bind.directive';
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

const date = new Date();
date.setDate(date.getDate() - 5);
const dateString = date.toISOString().split('T')[0];

const upDate = new Date();
upDate.setDate(upDate.getDate() + 5);
const upDateString = upDate.toISOString().split('T')[0];

@Component({
  template: `
    <div [appColorHighlightBind]='"${dateString}"' >
      <div>
        <h2>
          Something Green
        </h2>
      </div>
    </div>
    <div>
      <div>
        <h2>
          Something h2
        </h2>
      </div>
    </div>
    <div [appColorHighlightBind]='"${upDateString}"' >
      <div>
        <h2>
          Something Aqua
        </h2>
      </div>
    </div>
  `
})
class TestComponent { }

let des, bareH2;

beforeEach(() => {
  const fixture = TestBed.configureTestingModule({
    declarations: [ ColorHighlightDirective, TestComponent ]
  })
    .createComponent(TestComponent);

  fixture.detectChanges(); // initial binding

  // all elements with an attached HighlightDirective
  des = fixture.debugElement.queryAll(By.directive(ColorHighlightDirective));

  // the h2 without the HighlightDirective
  bareH2 = fixture.debugElement.query(By.css('h2:not([appColorHighlightBind])'));
});

describe('ColorHighlightDirective', () => {
  // color tests
  it('should have three appColorHighlightBind elements', () => {
    expect(des.length).toBe(2);
  });

  it('should show green color ', () => {
    const bgColor = des[0].nativeElement.querySelector('div').style.border;
    expect(bgColor).toBe('1px solid green');
  });
  it('should show aqua color ', () => {
    const bgColor = des[1].nativeElement.querySelector('div').style.border;
    expect(bgColor).toBe('1px solid aqua');
  });
});

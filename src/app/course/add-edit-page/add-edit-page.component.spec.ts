import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPageComponent } from './add-edit-page.component';
import {FormsModule} from '@angular/forms';
import {DurationPipe} from '../../pipes/duration.pipe';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('AddEditPageComponent', () => {
  let component: AddEditPageComponent;
  let fixture: ComponentFixture<AddEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPageComponent, DurationPipe ],
      imports: [ FormsModule, RouterModule.forRoot([]), ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPageComponent } from './add-edit-page.component';
import {FormsModule} from '@angular/forms';
import {DurationPipe} from '../../pipes/duration.pipe';

describe('AddEditPageComponent', () => {
  let component: AddEditPageComponent;
  let fixture: ComponentFixture<AddEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPageComponent, DurationPipe ],
      imports: [ FormsModule ]
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

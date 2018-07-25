import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css']
})
export class AddEditPageComponent implements OnInit {
  @Input() duration: string;

  constructor() { }

  ngOnInit() {
  }

  public emptyHandler() {
    console.log('emptyHandler call');
  }

}

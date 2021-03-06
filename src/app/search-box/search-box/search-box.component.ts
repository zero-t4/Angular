import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";
import { get } from 'lodash';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  data: any = new FormGroup({
    searchInput: new FormControl(),
  });

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) { }

  searchHandler() {
    const searchInput = get(this, 'data.value.searchInput');
    this.coursesService.filterCourseItems(searchInput);
  }

  ngOnInit() {
  }

  addCourse() {
    this.router.navigate(['courses/new']);
  }

}

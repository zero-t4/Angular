import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchInput: string;

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) { }

  searchHandler(searchInput) {
    this.coursesService.filterCourseItems(searchInput);
  }

  ngOnInit() {
  }

  addCourse() {
    this.router.navigate(['courses/new']);
  }

}

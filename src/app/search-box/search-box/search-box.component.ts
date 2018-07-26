import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchInput: string;

  constructor(private coursesService: CoursesService) { }

  searchHandler(searchInput) {
    this.coursesService.filterCourseItems(searchInput);
  }

  ngOnInit() {
  }

}

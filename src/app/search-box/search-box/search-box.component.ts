import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchInput: string;

  @Output() searchHandler(e) {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}

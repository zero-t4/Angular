import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchInput: string;
  @Output() filterFunc: EventEmitter<string> = new EventEmitter<string>();

  searchHandler(e) {
    console.log(e);
    this.filterFunc.emit(this.searchInput);
  }
  constructor() { }

  ngOnInit() {
  }

}

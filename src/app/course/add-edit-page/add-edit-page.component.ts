import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css']
})
export class AddEditPageComponent implements OnInit {
  @Input() duration: string;
  public routeParams: any = {};

  constructor(private route: ActivatedRoute) { // ActivatedRouteSnapshot
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.routeParams.id = data['id'];
    });
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

  public emptyHandler() {
    console.log('emptyHandler call');
  }

}

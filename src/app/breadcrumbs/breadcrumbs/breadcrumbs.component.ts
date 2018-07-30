import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { last } from "lodash";
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.css"]
})
export class BreadcrumbsComponent implements OnInit {
  public url: string = "";
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      // TODO 30.07 need to refactor later
      this.url =
        this
          .coursesService
          .getItemById(
            Number(
              last(url).toString()
            )
          ).title;
    });
  }
}

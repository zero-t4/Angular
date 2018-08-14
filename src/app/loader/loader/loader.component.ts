import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public visibility: boolean = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.getSource().subscribe(
      visibility => {
        console.log('data from Ob ', visibility);
        this.visibility = visibility;
      },
      error => console.error(error)
    );
  }

}

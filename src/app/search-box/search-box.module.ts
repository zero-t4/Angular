import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchBoxComponent],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule { }

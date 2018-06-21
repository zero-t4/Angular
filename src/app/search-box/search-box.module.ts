import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SearchBoxComponent],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule { }

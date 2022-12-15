import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { StatusFilterPipe } from './status-filter.pipe';



@NgModule({
  declarations: [
    SearchComponent,
    FilterPipe,
    SortPipe,
    StatusFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    FilterPipe,
    SortPipe,
    StatusFilterPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { RefDirective } from './dashboard/ref.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    ErrorPageComponent,
    NewBoardComponent,
    RefDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    ErrorPageComponent
  ]
})
export class PagesModule { }

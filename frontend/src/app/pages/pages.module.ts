import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ErrorPageComponent,
    NewBoardComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    ErrorPageComponent
  ]
})
export class PagesModule { }

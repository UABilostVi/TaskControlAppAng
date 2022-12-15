import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskListStatusComponent } from './task-list-status/task-list-status.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ErrorPageComponent,
    NewBoardComponent,
    BoardComponent,
    NewTaskComponent,
    EditBoardComponent,
    EditTaskComponent,
    TaskListStatusComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    ErrorPageComponent
  ]
})
export class PagesModule { }

import { EditBoardComponent } from './pages/edit-board/edit-board.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { BoardComponent } from './pages/board/board.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBoardComponent } from './pages/new-board/new-board.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard/new-board', component: NewBoardComponent, pathMatch: 'full' },
  { path: 'board/:id', component: BoardComponent, pathMatch: 'full' },
  { path: 'board/:id/edit-board', component: EditBoardComponent , pathMatch: 'full' },
  { path: 'board/:id/tasks/:taskId/edit-task', component: EditTaskComponent , pathMatch: 'full' },
  { path: 'board/:id/tasks', component: BoardComponent, pathMatch: 'full' },
  { path: 'board/:id/tasks/new-task', component: NewTaskComponent, pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

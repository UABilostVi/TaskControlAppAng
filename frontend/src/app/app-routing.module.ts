import { BoardComponent } from './pages/board/board.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBoardComponent } from './pages/new-board/new-board.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard/new-board', component: NewBoardComponent, pathMatch: 'full' },
  { path: 'board/:id', component: BoardComponent, pathMatch: 'full' },
  { path: 'board/:id/tasks', component: BoardComponent, pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

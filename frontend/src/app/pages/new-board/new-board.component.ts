import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from './../../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent implements OnInit {

  constructor(
    private taskServise: TaskService,
    private router: Router
  ) { }

  ngOnInit() { }

  createNewBoard(text: string) {
    this.taskServise.createBoard(text).subscribe((res: any) => { 
      this.router.navigate(['/board', res._id])
    })
  }
}
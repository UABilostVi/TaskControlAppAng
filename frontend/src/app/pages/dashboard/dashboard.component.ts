import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  boardsList: any

  constructor(
    private taskServise: TaskService) { }

  ngOnInit() {
    this.taskServise.getBoards().subscribe((boardsList: any) => {      
      this.boardsList = boardsList;
    })
  }
}
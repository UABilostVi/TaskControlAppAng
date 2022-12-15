import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/models/Board.model';
import { TaskService } from './../../task.service';

@Component({
  selector: 'app-task-list-status',
  templateUrl: './task-list-status.component.html',
  styleUrls: ['./task-list-status.component.scss']
})
export class TaskListStatusComponent implements OnInit {

  taskList: Task[];
  board: Board = new Board;
  serchText: string = '';
  sortByVal: string = 'created_date';
  sortDirVal: string = 'ASC';
  sortStatus: string = '';

  @Input() taskStatus: string;
  @Input() sortByValue: string;
  @Input() sortDirValue: string;

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.taskService.getTasks(params['id']).subscribe((taskList: Task[]) => {
        this.taskList = taskList;
      });
      this.taskService.getBoard(params['id']).subscribe((board: Board) => {
        this.board = board;
      })
    })
  }
  
  deleteTask(task) {
    this.taskService.deleteTask(task).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
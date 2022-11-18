import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
  ) { }

  taskList: any;
  board: any = {};

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.taskService.getTasks(params['id']).subscribe((taskList: any) => {
        this.taskList = taskList;
      });
      this.taskService.getBoard(params['id']).subscribe((board: any) => {
        this.board = board;
      })
    })
  }
}
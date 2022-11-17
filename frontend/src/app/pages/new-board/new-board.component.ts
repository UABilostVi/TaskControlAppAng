import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from './../../task.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent implements OnInit {

  constructor(private taskServise: TaskService,) { }

  ngOnInit(): void {
  }

  @Output() close = new EventEmitter<void>()

  createNewBoard() {
    this.taskServise.createBoard('BRAND NEW')
  }

}

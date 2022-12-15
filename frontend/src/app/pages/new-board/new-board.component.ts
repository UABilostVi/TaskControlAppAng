import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from './../../task.service';
import { Router } from '@angular/router';
import { Board } from '../../models/Board.model';


@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent implements OnInit {

  constructor(
    private taskServise: TaskService,
    private router: Router,
  ) { }

  @Output() close = new EventEmitter<void>()

  ngOnInit() { }

  createNewBoard(form) {
    this.taskServise.createBoard(form.value.name, form.value.description).subscribe((newBoard: Board) => { 
      this.router.navigate(['/board', newBoard._id, 'tasks'])
    })    
  }
}
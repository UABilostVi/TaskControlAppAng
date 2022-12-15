import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../models/Board.model';

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

  board: Board = new Board;
  serchText: string = '';
  sortByVal: string = 'created_date';
  sortDirVal: string = 'ASC';
  sortStatus: string = '';

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.taskService.getBoard(params['id']).subscribe((board: Board) => {
        this.board = board;
      })
    })    
  }

  onSearchTextEntered(searchVal: string) {
    this.serchText = searchVal
  }
}
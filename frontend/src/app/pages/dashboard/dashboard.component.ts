import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  boardsList: Object[]
  modal = false;
  serchText: string ='';
  sortByVal: string = 'created_date';
  sortDirVal: string = 'ASC';

  constructor(
    private taskServise: TaskService) { }

  ngOnInit() {
    this.taskServise.getBoards().subscribe((boardsList: Object[]) => {
      this.boardsList = boardsList;
    })
  }

  showNewBoard() {
    this.modal = true
  }

  delBoard(boardId: string) {
    event.stopPropagation();
    this.taskServise.deleteBoard(boardId).subscribe(() => {
      this.ngOnInit()
    })
  }

  onSearchTextEntered(searchVal: string) {
    this.serchText = searchVal
  }
}
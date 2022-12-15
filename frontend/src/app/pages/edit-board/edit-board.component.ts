import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from './../../task.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.scss']
})
export class EditBoardComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  boardId: string

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.boardId = params['id']
    })
  }

  editClick(editBoardForm: NgForm) {
    this.taskService.updtBoard(this.boardId, editBoardForm.value).subscribe(()=>{
      console.log(editBoardForm.value);
      this.router.navigate(['/board', this.boardId, 'tasks'])
    })
  }
}

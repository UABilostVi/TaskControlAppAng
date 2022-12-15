import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  taskId: string
  boardId: string

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.taskId = params['taskId'],
      this.boardId = params['id']
    })
  }

  editClick(editTaskForm: NgForm) {
    this.taskService.updtTask(this.boardId ,this.taskId, editTaskForm.value).subscribe(()=>{
      this.router.navigate(['/board', this.boardId, 'tasks'])
    })
  }
}

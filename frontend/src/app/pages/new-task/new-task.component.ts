import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/models/Tasks.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  boardId: string;
  newTaskForm: FormGroup

  constructor(private taskServise: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.boardId = params['id']
    })

    this.newTaskForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null)
    })
  }

  createNewTask() {
    this.taskServise.createTask(this.newTaskForm.value.name, 
                                this.newTaskForm.value.description, 
                                this.boardId).subscribe((newTask: Task) => {
      this.router.navigate(['/board', newTask.boardId, 'tasks'])
    })
  }
}

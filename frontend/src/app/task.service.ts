import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';
import { Task } from '../app/models/Tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) {
  }

  createBoard(name: string, desc: string) {
    return this.webRequestService.post('dashboard', { name, desc })
  }

  createTask(name: string, description: string, boardId: string) {
    return this.webRequestService.post(`board/${boardId}/tasks`, { name, description, boardId })
  }

  getBoards() {
    return this.webRequestService.get('dashboard')
  }

  getBoard(listId:string) {
    return this.webRequestService.get(`board/${listId}`)
  }

  getTasks(boardId:string) {
    return this.webRequestService.get(`board/${boardId}/tasks`)
  }

  completeTask(task: Task) {
    return this.webRequestService.patch(`board/${task.boardId}/tasks/${task._id}`, {
      completed: !task.completed
    })
  }

  deleteTask(task: Task) {
    return this.webRequestService.delete(`board/${task.boardId}/tasks/${task._id}`) 
  }

  deleteBoard(boardId:string) {
    return this.webRequestService.delete(`board/${boardId}`) 
  }

  updtBoard(boardId: string, payload: Object) {    
    return this.webRequestService.patch(`board/${boardId}`, payload)
  }

  updtTask(boardId: string, taskId:string, payload: Object) {    
    return this.webRequestService.patch(`board/${boardId}/tasks/${taskId}`, payload)
  }
}

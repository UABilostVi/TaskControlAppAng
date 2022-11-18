import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) {
  }

  createBoard(name: string) {
    return this.webRequestService.post('dashboard', { name })
  }

  getBoards() {
    return this.webRequestService.get('dashboard')
  }

  getBoard(listId:string) {
    return this.webRequestService.get(`board/${listId}`)
  }

  getTasks(listId:string) {
    return this.webRequestService.get(`board/${listId}/tasks`)
  }
}

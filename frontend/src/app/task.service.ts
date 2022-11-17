import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) {
  }

  createBoard(name: string) {
    return this.webRequestService.post('dashboard', { name }).subscribe((response: any) => {
      console.log(response)
    })
  }

  getBoards() {
    return this.webRequestService.get('dashboard')
  }
}

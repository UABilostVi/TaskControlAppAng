import { NewBoardComponent } from './../new-board/new-board.component';
import { TaskService } from './../../task.service';
import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { RefDirective } from './ref.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  boardsList: any

  @ViewChild(RefDirective, {static: true}) refDir!: RefDirective;

  constructor(
    private taskServise: TaskService,
    private resolver: ComponentFactoryResolver) { }
 
  ngOnInit(): void {
    this.taskServise.getBoards().subscribe((boardsList: any) => {
      this.boardsList = boardsList;
    })
  }

  createNewBoardModal() {
    const componentFactory = this.resolver.resolveComponentFactory(NewBoardComponent);
    const component = this.refDir.containerRef.createComponent(componentFactory);
    component.instance.close.subscribe(()=>{
      this.refDir.containerRef.clear()
    })
  }
}

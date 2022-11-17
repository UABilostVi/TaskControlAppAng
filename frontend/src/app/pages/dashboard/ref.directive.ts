import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[refModalDir]'
})
export class RefDirective {

  constructor(public containerRef: ViewContainerRef) { }

}

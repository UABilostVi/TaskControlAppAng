import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {

    console.log("Args: "+args);
    console.log("Value: "+value);
    

    if(!value) {
      return value
    }

    return value.filter((item) => {
      return item.status == args
    })
  }
}

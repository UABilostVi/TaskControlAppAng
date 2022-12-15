import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, args: string): Array<any> {

    if (args == '') {
      return value;
    } else {
      return value.filter((item) => {
        return item.name.toLowerCase().includes(args.toLowerCase())
      })
    }   
  }
}

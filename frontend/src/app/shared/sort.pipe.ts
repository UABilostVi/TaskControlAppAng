import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args: string[]): any[] {

    const sortBy = args[0];
    const sortDir = args[1];
    let mult = 1;

    if (sortDir === 'DESC') {
      mult = -1;
    }

    if (!value) return value;

    return value.sort((a: any, b: any) => {
      
      if (a[sortBy] < b[sortBy]) {
        return -1 * mult
      } else if (a[sortBy] > b[sortBy]) {
        return 1 * mult
      } else {
        return 0
      }
    })
    
  }

}

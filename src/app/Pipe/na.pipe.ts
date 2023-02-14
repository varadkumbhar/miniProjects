import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, para?: string): unknown {
    if (value != '' && value !== undefined && value !== null) {
      return value;
    } else {

      if(para !== undefined){
        return para;
      }else{
        return '--';
      }
    }

  }

}

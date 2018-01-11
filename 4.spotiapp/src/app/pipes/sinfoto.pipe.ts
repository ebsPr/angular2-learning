import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    let noimage = 'assets/img/noimage.png';

    if(!value){
      return noimage;
    }

    return value.length > 1 ? value[1].url : noimage;
    
  }

}
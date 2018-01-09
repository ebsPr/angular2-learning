import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenya'
})
export class ContrasenyaPipe implements PipeTransform {

  transform(value: string, activar : boolean = true): any {
    if(!activar){
      return value;
    }else{
      let result = '';
       value.split('').forEach(x => result += '*')
      return result;
    }
  }

}

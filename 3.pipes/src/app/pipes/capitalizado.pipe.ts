import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CaptializadoPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    let result = '';
      if ( args[0] === false) {
        result = value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
      }else {
        value.split(' ').forEach(x => result += x.charAt(0).toUpperCase() + x.substring(1).toLowerCase() + ' ' );
      }

     return result.trim();
  }
}

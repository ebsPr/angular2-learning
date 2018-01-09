import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})

export class DomSeguroPipe implements PipeTransform {
  constructor( private domSanitizer : DomSanitizer){};

  transform(value: any, ...args: any[]): any {
    console.log('test')
    return this.domSanitizer.bypassSecurityTrustResourceUrl(args[0]+value);
  }
}






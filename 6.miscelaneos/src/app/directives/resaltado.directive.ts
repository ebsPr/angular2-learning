import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = 'yellow';
   }
   
   @Input("appResaltado") nuevoColor:string;

   private resaltar(color:string = 'yeallo'){
    this.el.nativeElement.style.backgroundColor = color;
   }

   @HostListener('mouseenter') mouseEntro(){
      this.resaltar(this.nuevoColor);
   }

   @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
   }

}

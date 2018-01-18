import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanyo">
      Hola mundo.. esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamanyo = tamanyo+5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamanyo = tamanyo-5">
    <i class="fa fa-minus"></i>
  </button>
  `
})
export class NgStyleComponent implements OnInit {

  tamanyo: number = 30;

  constructor() { }

  ngOnInit() {
  }

}

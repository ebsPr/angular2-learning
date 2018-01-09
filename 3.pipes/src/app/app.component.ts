import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  nombre = 'Saida';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a= 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('han llegado los datos'), 3500);
  });

  fecha = new Date();

  nombre2 = 'saidA balsellS martineZ';

  video = 'vLBR6x1r-ao';

  activar = true;
}

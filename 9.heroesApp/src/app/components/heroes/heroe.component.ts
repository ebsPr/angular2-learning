import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";


import { Heroe } from "../../interfaces/heroe.interface";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: ''
  }

  nuevo: boolean = false;
  id: string;

  constructor(
    private _heroeService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .subscribe(res => {
        this.id = res['id'];
        if(this.id !== 'nuevo'){
          this._heroeService.getHeroe(this.id)
            .subscribe( heroe => this.heroe = heroe);
        }
      });
  }

  ngOnInit() {
  }

  guardar() {
    console.log('this.heroe',this.heroe);
    console.log('this.id',this.id);

    if (this.id == 'nuevo') {
      // insertar
      this._heroeService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/heroe', data.name]);
        },
        error => {
          console.error(error);
        });
    } else {
      // actualizar
      this._heroeService.actualizar(this.heroe, this.id)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/heroe', this.id]);
        },
        error => {
          console.error(error);
        });
    }
  }

  agregarNuevo(form: NgForm){
    this.router.navigate(['heroe','nuevo']);
    form.reset({
      casa:"Marvel"
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe} from '../../servicios/heroes.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

   heroes:Heroe[] = [];

  constructor(private _heroesService : HeroesService, private _activatedRoute :ActivatedRoute ) { }

  ngOnInit() {
     this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
      console.log(this.heroes);
     });

  }

}

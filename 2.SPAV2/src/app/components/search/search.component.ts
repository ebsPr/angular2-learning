import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService: HeroesService, private _activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this._activatedRouter.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  resultadoHeroes() {
    return this.heroes.length > 0;
  }

}

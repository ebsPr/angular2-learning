import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router:Router) {
    console.log("constructor HeroesComponent");
  }

  ngOnInit() {
    console.log("ngOnInit HeroesComponent");
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( idx:number){
    this._router.navigate(['/heroe',idx]);
  }
}

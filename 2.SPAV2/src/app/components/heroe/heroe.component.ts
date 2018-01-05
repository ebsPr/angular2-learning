import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService  } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = null;

  constructor(private _activatedRouter: ActivatedRoute, private _heroeService: HeroesService) {
      this._activatedRouter.params.subscribe(params => {
        console.log();
        this.heroe = this._heroeService.getHeroe(params['id']);
      });
  }

  ngOnInit() {
  }

}

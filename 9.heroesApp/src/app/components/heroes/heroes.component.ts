import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean= true;

  constructor(
    private _heroeService: HeroesService,
  ) { 
    this.actualizarListado();
  }

  ngOnInit() {
  }

  borrarHeroe(key$:string){
    this._heroeService.eliminarHeroe(key$)
    .subscribe( data => {
        console.log(data)
        // this.actualizarListado();
        if(data == null)
          delete this.heroes [key$]
        else
          console.error('ha habido un error al eliminar')
    })
  }

  actualizarListado(){
    this._heroeService.getHeroes()
    .subscribe( heroes => {
      this.heroes = heroes;
      this.loading= false;
    });
  }

}

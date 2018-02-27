import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import "rxjs/Rx";

import { Heroe } from "../interfaces/heroe.interface";
import { HeroeComponent } from '../components/heroes/heroe.component';

@Injectable()
export class HeroesService {

  heroesURL: string = 'https://heroesapp-b1dda.firebaseio.com/heroes';
  // heroeURL: string = 'https://heroesapp-b1dda.firebaseio.com/heroes/-L3inVIb381Y7ePdWiid'

  headers = new Headers({
    'Content-Type':'application/json'
  });

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);

    let heroesUrlTmp = this.heroesURL + '.json';
    return this.http.post(heroesUrlTmp,body, {headers:this.headers})
      .map( res => {
        console.log(res.json())
        return res.json()
      });
  }

  actualizar(heroe:Heroe,key$:string){
    let body = JSON.stringify(heroe);
    let url = `${this.heroesURL}/${key$}.json`;

    return this.http.put(url,body, {headers:this.headers})
      .map( res => {
        console.log(res.json())
        return res.json()
      });
  }

  getHeroe(key$:string){
    let url = `${this.heroesURL}/${key$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getHeroes(){
    return this.http.get(this.heroesURL+'.json')
      .map(res => res.json());
  }

  eliminarHeroe(key$:string){
    let url = `${this.heroesURL}/${key$}.json`;
    return this.http.delete(url)
    .map( res => res.json() );
  }
}

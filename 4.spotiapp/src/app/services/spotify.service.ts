import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map' ;

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  constructor(public _http : HttpClient) {
    console.log('Servicio spotify listo')
   }

   getArtistas(termino:string){
      let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`
      let headers = new HttpHeaders({
        'Authorization': 'Bearer BQAISi3sbsAI1gsJZk1XGD-sEbXX3H-pU4o-nCvlz-q8JAs5XrtaJj3hkY0NWuwZYMb72C6x9Ltku7edQ1M'
      });

      // es6 el {headers:headers} se puede poner como {headers}
      return this._http.get(url,{headers:headers})
      .map( (response:any) => {
        this.artistas = response.artists.items;
        return this.artistas;
      });
   }
}

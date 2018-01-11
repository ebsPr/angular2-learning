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
        'Authorization': 'Bearer BQCCjmn_lCl09McH-1bVc3pEvcaVeszZDsxp65-UGGaa0srEDfAYKmaJ-SJ1YJcdM8PQkGSht3SaGcsHymY'
      });

      // es6 el {headers:headers} se puede poner como {headers}
      return this._http.get(url,{headers:headers})
      .map( (response:any) => {
        this.artistas = response.artists.items;
        return this.artistas;
      });
   }
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map' ;

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlSpotify:string = 'https://api.spotify.com/v1/';
  authorization:string = 'BQDgEuV3AS2NUCOmqz2mJOf5-lZh1n89-YWf0Vc9rpXBLoa4G48N7s2aXAmaZIytMIGFCCU0HMffqBJDFiE';
  

  constructor(public _http : HttpClient) {
    console.log('Servicio spotify listo')
   }

   private getHeaders():HttpHeaders {
        return new HttpHeaders({'Authorization': `Bearer ${this.authorization}`});
   }

   getArtista(id: string){
     let url = `${this.urlSpotify}artists/${id}`;

     return this._http.get(url,{headers: this.getHeaders()});

   }
   getArtistas(termino:string){
      let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`

    
      return this._http.get(url,{headers:this.getHeaders()})
      .map( (response:any) => {
        this.artistas = response.artists.items;
        return this.artistas;
      });
   }

   getTop(id:string){
      let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`  

      return this._http.get(url,{headers:this.getHeaders()})
      .map( (response:any) => {
        return response.tracks;
      });
   }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista:any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService ) { }

  ngOnInit() {
    this._activatedRoute.params
    .map( params => params['id'])
      .subscribe( id => {

          // obtenemos artista
          this._spotifyService.getArtista(id)
          .subscribe( artista => {
            console.log(artista)
            this.artista = artista;
          });

          // obtenemos las canciones top del artista
          this._spotifyService.getTop(id).subscribe( top => console.log( top));
      });
  }

}

import { Component , OnInit } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Artist } from "../../../Artist";
import { Album } from "../../../Album";
import { ActivatedRoute , Params } from "@angular/router";
@Component({

    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',

})

export class ArtistComponent implements OnInit{
    
    id:string;
    //artistId:string;
    artist:Artist[];
    albums:Album[];
    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute){

    }
    ngOnInit(){
        this._route.params
          .map(params => params['id'])
          .subscribe((id) => { 
              console.log("ID", id)
             this._spotifyService.getToken()
              .subscribe(data => {
                this._spotifyService.getArtist(id, data.access_token)
                 .subscribe(artist=> {
                   this.artist = artist;
                   console.log(this.artist)
                })
                this._spotifyService.getAlbums(id, data.access_token)
                    .subscribe(albums => {
                      this.albums = albums.items;
                    })
                })
          })
    }
}
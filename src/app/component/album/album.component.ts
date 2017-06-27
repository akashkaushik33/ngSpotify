import { Component , OnInit } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Artist } from "../../../Artist";
import { Album } from "../../../Album";
import { ActivatedRoute , Params } from "@angular/router";

@Component({

    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'

})

export class AlbumComponent {
    id:string;
    album:Album[];

    constructor(private _spotifyservice:SpotifyService , private _route:ActivatedRoute ){}


    ngOnInit(){
        this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
            this._spotifyservice.getToken()
            .subscribe(data => {
                this._spotifyservice.getAlbum(id, data.access_token)
                .subscribe(album => {
                    this.album = album;
                })
            })
        })
    }



}
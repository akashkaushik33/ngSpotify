import { Component } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Artist } from "../../../Artist";

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers:[SpotifyService] 
})

export class SearchComponent{
   
   searchStr:string;
   searchRes : Artist[];
   constructor(private _spotifyService:SpotifyService){}

   searchMusic(){
       this._spotifyService.getToken()
         .subscribe(res => {
             this._spotifyService.searchMusic(this.searchStr ,'artist' , res.access_token)
               .subscribe(res=> {
                 this.searchRes = res.artists.items;
            })
         })
       
    }  
}

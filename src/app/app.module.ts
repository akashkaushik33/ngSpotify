import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { AboutComponent } from "./component/about/about.component";
import { ArtistComponent } from "./component/artist/artist.component";
import { AlbumComponent } from "./component/album/album.component";
//import { routing } from "./app.routes";
import { SearchComponent } from "./component/search/search.component";
import { AppComponent }  from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpModule ,JsonpModule} from "@angular/http";
import { SpotifyService  } from "./component/services/spotify.service";
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
    {path:'' , component:SearchComponent},
    {path:'about', component:AboutComponent},
    {path:'artist/:id' , component:ArtistComponent},
    {path:'album/:id' , component:AlbumComponent}
];

@NgModule({
  imports:      [ BrowserModule ,JsonpModule, RouterModule.forRoot(routes) ,FormsModule , HttpModule],
  declarations: [ AppComponent , NavbarComponent , AboutComponent, SearchComponent , ArtistComponent ,AlbumComponent],
  providers: [SpotifyService],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }

import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./component/search/search.component";
import { AboutComponent } from "./component/about/about.component";
import { ArtistComponent } from "./component/artist/artist.component";
import { AlbumComponent } from "./component/album/album.component";

const routes : Routes = [
    {path:'' , component:SearchComponent},
    {path:'about', component:AboutComponent},
    {path:'artist/:id' , component:ArtistComponent},
    {path:'album/:id' , component:AlbumComponent}
];

export const routing = [
    RouterModule.forRoot(routes)
];
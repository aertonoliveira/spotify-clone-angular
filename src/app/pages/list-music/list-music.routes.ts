import { Routes } from "@angular/router";
import { ListMusicComponent } from "./list-music.component";

export const ListMusicRotas: Routes = [
  {
    path: ':params/:id',
    component: ListMusicComponent
  },

]

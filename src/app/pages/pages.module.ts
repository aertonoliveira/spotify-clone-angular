import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ListMusicModule } from './list-music/list-music.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomeModule,
    ListMusicModule,
  ]
})
export class PagesModule { }

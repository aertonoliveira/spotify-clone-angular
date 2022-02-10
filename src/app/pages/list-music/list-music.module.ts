import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ListMusicRotas } from './list-music.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListMusicComponent } from './list-music.component';

@NgModule({
  declarations: [
    ListMusicComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ListMusicRotas)
  ]
})
export class ListMusicModule { }

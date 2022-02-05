import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from './services/request.service';
import { PlayListComponent } from './components/play-list/play-list.component';
import { PlayComponent } from './components/play/play.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



const COMPONENTS = [
  SidebarComponent,
  PlayComponent,
  PlayListComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    RequestService,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
  ]

})
export class SharedModule { }

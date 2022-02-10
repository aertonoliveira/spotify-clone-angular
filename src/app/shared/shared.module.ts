import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from './services/request.service';
import { PlayListComponent } from './components/play-list/play-list.component';
import { PlayComponent } from './components/play/play.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { ControlPagesComponent } from './components/control-pages/control-pages.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CardMuiscComponent } from './components/card-muisc/card-muisc.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';



const COMPONENTS = [
  SidebarComponent,
  PlayComponent,
  PlayListComponent,
  SearchComponent,
  SidebarRightComponent,
  ControlPagesComponent,
  AvatarComponent,
  NotificationComponent,
  CardMuiscComponent,
  CarouselComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,



  ],
  providers: [
    RequestService,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    ...COMPONENTS,
    CarouselModule
  ]

})
export class SharedModule { }

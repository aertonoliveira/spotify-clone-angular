import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PlayComponent } from './shared/components/play/play.component';
import { PlayListComponent } from './shared/components/play-list/play-list.component';
import { LoginComponent } from './login/login.component';
import { Interceptor } from './shared/services/header-interceceptor.service';
import { ConteinerComponent } from './layout/conteiner/conteiner.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    ConteinerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    Interceptor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

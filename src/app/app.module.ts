import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FirstComponent } from './first/first.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MosaiqueComponent } from './pages/mosaique/mosaique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { VideoListComponent } from './pages/video-list/video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    FirstComponent,
    CarouselComponent,
    MosaiqueComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

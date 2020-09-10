import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstComponent } from './first/first.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';
import { MosaiqueComponent } from './mosaique/mosaique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    FirstComponent,
    CarouselComponent,
    SliderComponent,
    MosaiqueComponent
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

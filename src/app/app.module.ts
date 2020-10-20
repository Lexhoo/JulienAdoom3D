import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FirstComponent } from './first/first.component';
import { MosaiqueComponent } from './pages/mosaique/mosaique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjetComponent } from './pages/projet/projet.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LightboxModule } from 'ngx-lightbox';
import { CategoriePageComponent } from './pages/categorie-page/categorie-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { ContactComponent } from './pages/contact/contact.component';
import { VideoProjectComponent } from './pages/video-project/video-project.component';
import { ShowreelComponent } from './pages/showreel/showreel.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    FirstComponent,
    MosaiqueComponent,
    VideoListComponent,
    ProjetComponent,
    FooterComponent,
    CategoriePageComponent,
    ContactComponent,
    VideoProjectComponent,
    ShowreelComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    LightboxModule,
    NgbModule,
    NgImageSliderModule,
    ReactiveFormsModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

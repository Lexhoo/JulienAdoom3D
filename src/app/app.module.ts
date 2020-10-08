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
import { FormsModule } from '@angular/forms';
import { ImageUpComponent } from './pages/image-up/image-up.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjetComponent } from './pages/projet/projet.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LightboxModule } from 'ngx-lightbox';
import { CategoriePageComponent } from './pages/categorie-page/categorie-page.component';
import { VisualEffectComponent } from './pages/visual-effect/visual-effect.component';
import { DesignComponent } from './pages/design/design.component';
import { SketchbookComponent } from './pages/sketchbook/sketchbook.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    FirstComponent,
    MosaiqueComponent,
    VideoListComponent,
    ImageUpComponent,
    ProjetComponent,
    FooterComponent,
    CategoriePageComponent,
    VisualEffectComponent,
    DesignComponent,
    SketchbookComponent,



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
    NgbModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

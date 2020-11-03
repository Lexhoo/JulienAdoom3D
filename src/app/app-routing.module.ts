import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MosaiqueComponent } from './pages/mosaique/mosaique.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { CategoriePageComponent } from './pages/categorie-page/categorie-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { VideoProjectComponent } from './pages/video-project/video-project.component';
import { ShowreelComponent } from './pages/showreel/showreel.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent , data: {animation: 'Home'} },
  { path: 'mosaique', component: MosaiqueComponent , data: {animation: 'RandHome'} },
  { path: 'categorie/:id/:titre', component: CategoriePageComponent , data: {animation: 'Graphic'} },
  { path: 'projet', component: ProjetComponent , data: {animation: 'Projet'} },
  { path: 'contact', component: ContactComponent , data: {animation: 'Contact'} },
  { path: 'realisation', component: VideoListComponent , data: {animation: 'VideoList'} },
  { path: 'videoproject', component: VideoProjectComponent , data: {animation: 'VideoProject'} },
  { path: 'showreel', component: ShowreelComponent , data: {animation: 'Showreel'} },
  { path: 'error', component: ErrorPageComponent , data: {animation: 'error'} },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]

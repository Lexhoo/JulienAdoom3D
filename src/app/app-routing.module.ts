import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MosaiqueComponent } from './pages/mosaique/mosaique.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { CategoriePageComponent } from './pages/categorie-page/categorie-page.component';
import { VisualEffectComponent } from './pages/visual-effect/visual-effect.component';
import { DesignComponent } from './pages/design/design.component';
import { SketchbookComponent } from './pages/sketchbook/sketchbook.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent , data: {animation: 'Home'} },
  { path: 'mosaique', component: MosaiqueComponent , data: {animation: 'RandHome'} },
  { path: 'categorie/:id/:titre', component: CategoriePageComponent , data: {animation: 'Graphic'} },
  { path: 'visualeffect', component: VisualEffectComponent , data: {animation: 'VisualEffect'} },
  { path: 'design', component: DesignComponent , data: {animation: 'Design'} },
  { path: 'sketchbook', component: SketchbookComponent , data: {animation: 'Sketchbook'} },
  { path: 'projet', component: ProjetComponent , data: {animation: 'Projet'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]

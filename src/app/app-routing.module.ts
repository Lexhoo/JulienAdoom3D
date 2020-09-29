import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MosaiqueComponent } from './pages/mosaique/mosaique.component';
import { ProjetComponent } from './pages/projet/projet.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'mosaique', component: MosaiqueComponent},
  { path: 'projet/:idProjet', component: ProjetComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]

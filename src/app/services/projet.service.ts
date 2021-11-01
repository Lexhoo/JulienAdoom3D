import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjetModel } from '../models/projet-model';
import { UploadFiles } from '../models/upload-files';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  urlProjet = 'https://doumovieback.doumovie.fr/upload/';
  urlIdProjetAndIdCategorie = 'https://doumovieback.doumovie.fr/upload/projetcategorie';
  urlgetImagesCategorieByProjet = 'https://doumovieback.doumovie.fr/mosaique/categorie/';
  urlhasVideo = 'https://doumovieback.doumovie.fr/upload/imagevideo';
  urlImagesVitrine = 'https://doumovieback.doumovie.fr/upload/doumjpg';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<ProjetModel>(this.urlProjet + 'all');
  }

  getImagesByProjet(idProjet: number): Observable<UploadFiles[]> {
    return this.http.get<UploadFiles[]>(this.urlProjet + idProjet);
  }
  findByIdProjetAndIdCategorie(idProjet: number, idCategorie: number): Observable<UploadFiles[]> {
  return this.http.get<UploadFiles[]>(this.urlIdProjetAndIdCategorie + idProjet + idCategorie);
}
getImagesCategorieByProjet(idCategorie: number): Observable<UploadFiles[]> {
  return this.http.get<UploadFiles[]>(this.urlgetImagesCategorieByProjet + idCategorie);
}

getImagesVideos() {
return this.http.get<UploadFiles[]>(this.urlhasVideo);
}

getImagesVitrine() {
  return this.http.get<UploadFiles[]>(this.urlImagesVitrine);
  }

}

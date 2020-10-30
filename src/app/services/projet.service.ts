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
  urlProjet = 'http://doumovieback.doumovie.fr/upload/';
  urlIdProjetAndIdCategorie = 'http://doumovieback.doumovie.fr/upload/projetcategorie';
  urlgetImagesCategorieByProjet = 'http://doumovieback.doumovie.fr/mosaique/categorie/';
  urlhasVideo = 'http://doumovieback.doumovie.fr/upload/imagevideo';

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

}

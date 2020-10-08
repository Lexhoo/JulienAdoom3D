import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjetModel } from '../models/projet-model';
import { UploadFiles } from '../models/upload-files';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  urlProjet = 'http://localhost:8080/upload/';
  urlIdProjetAndIdCategorie = 'http://localhost:8080/upload/projetcategorie';
  urlgetImagesCategorieByProjet = 'http://localhost:8080/mosaique/categorie/';

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
}

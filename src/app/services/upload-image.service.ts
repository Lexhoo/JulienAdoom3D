import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFiles } from '../models/upload-files';

const Url = 'https://doumovieback.doumovie.fr/mosaique';
const urlGraphic = 'https://doumovieback.doumovie.fr/upload/categorie/';


@Injectable({
  providedIn: 'root'
})
export class UploadImageService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<UploadFiles[]> {
    return this.http.get<UploadFiles[]>(Url);
  }

  get(id): Observable<any> {
    return this.http.get(`${Url}/${id}`)
  }

  post(data): Observable<any> {
    return this.http.post(Url, data);
  }


  getImagesByIdCategorie(idCategorie: number): Observable<UploadFiles[]> {
    return this.http.get<UploadFiles[]>(urlGraphic + idCategorie);
  }
}

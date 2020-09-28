import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjetModel } from '../models/projet-model';
import { UploadFiles } from '../models/upload-files';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  UrlProjet = 'http://localhost:8080/upload/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<ProjetModel>(this.UrlProjet + 'all');
  }

  getImagesByProjet(idProjet: number): Observable<UploadFiles[]> {
    return this.http.get<UploadFiles[]>(this.UrlProjet + idProjet);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from '../../services/upload-image.service';
import { UploadFiles } from 'src/app/models/upload-files';
import { Lightbox } from 'ngx-lightbox';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent {
  images: UploadFiles[] = [];
  imagesParProjet: UploadFiles[] = [];
  _albums: any;

  constructor(private projetService: ProjetService, private _lightbox: Lightbox, private uploadImageService: UploadImageService,
    private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    /**
     * Récupération d'une liste d'images. Une image random par projet
     */
        this.uploadImageService.getAll().subscribe({
          next: (images) => {

          this.images = images;
        },
        error: (err) => {
          if (err.error.status === 404) {
            console.log("Pas de fichiers trouvés");
          }
        }});
      }

  open(image: UploadFiles): void {
    this.projetService.getImagesByProjet(image.idProjet).subscribe({
      next: (imagesParProjet) => {
        this._albums = [];
      this.imagesParProjet = imagesParProjet;
      for (let i = 0; i < imagesParProjet.length; i++) {
        const src = imagesParProjet[i].imageUrl;
        const idProjet = imagesParProjet[i].idProjet
        const caption = imagesParProjet[i].titre;
        const thumb = imagesParProjet[i].imageUrl;
        const id = imagesParProjet[i].id;
        const album = {
           src: src,
           caption: caption,
           thumb: thumb,
           idProjet: idProjet,
           idImage: id
        };
        this._albums.push(album);
    }
    const imageFilter = this._albums.find( img => image.id === img.idImage);
    const index = this._albums.indexOf(imageFilter);
   // open lightbox
   this._lightbox.open(this._albums, index);},
    error: (err) => {
      if (err.error.status === 404) {
        console.log("Pas de fichiers trouvés");
      }
      console.log("err", err);
    }});
  }


  close(): void {
    // close lightbox programmatically

    this._lightbox.close();
  }


}

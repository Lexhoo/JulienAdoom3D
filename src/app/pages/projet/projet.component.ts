import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadFiles } from 'src/app/models/upload-files';
import { Lightbox } from 'ngx-lightbox';



@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
images: UploadFiles[] = [];
idProjet: number;
messageErreur: string;
isErreur= false;
slideIndex = 0;
numbImages : number;
imagesParProjet: UploadFiles[] = [];
_albums: any;

  constructor(private _lightbox: Lightbox, private router: Router, private projetService: ProjetService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idProjet = params.idProjet;
      this.projetService.getImagesByProjet(+params.idProjet).subscribe({
      next: (images) => {
        this.images = images;
      },
      error: (err) => {
       if (err.error.status === 404) {
         console.log("Pas de fichiers trouvés");
       }
      }});
    });
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

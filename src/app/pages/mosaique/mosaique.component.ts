import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from '../../services/upload-image.service';
import { ProjetService } from 'src/app/services/projet.service';
import { UploadFiles } from 'src/app/models/upload-files';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent {

  _albums = [];
  constructor(private _lightbox: Lightbox, private uploadImageService: UploadImageService) {

  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit(): void {

    this.uploadImageService.getAll().subscribe({
      next: (images) => {

  for (let i = 1; i < images.length; i++) {
    const src = images[i].imageUrl;
    const caption = images[i].titre;
    const thumb = images[i].imageUrl;
    const album = {
       src: src,
       caption: caption,
       thumb: thumb
    };

    this._albums.push(album);
  }
    },
    error: (err) => {
      if (err.error.status === 404) {
        console.log("Pas de fichiers trouvés");
      }
      console.log("err", err);
    }});
  }
}

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
    // for (let i = 1; i <= 4; i++) {
    //   const src = 'https://firebasestorage.googleapis.com/v0/b/julien3d-22327.appspot.com/o/Graphisme%2F2D%203D%2F07_cuisine_1.png?alt=media&token=b3d39401-7f1a-4dec-9153-9283e80e871d';
    //   const caption = 'Image ' + i + ' caption here';
    //   const thumb = 'https://firebasestorage.googleapis.com/v0/b/julien3d-22327.appspot.com/o/Graphisme%2F2D%203D%2F07_cuisine_1.png?alt=media&token=b3d39401-7f1a-4dec-9153-9283e80e871d';
    //   const album = {
    //      src: src,
    //      caption: caption,
    //      thumb: thumb
    //   };

    //   this._albums.push(album);
    // }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }





  // images: UploadFiles[] = [];

  // constructor(private projetService: ProjetService, private uploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) {  }
  // projetImage = null;

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

import { Component, Host, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFiles } from 'src/app/models/upload-files';
import { ProjetService } from '../../services/projet.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent  {
  images: UploadFiles[] = [];
<<<<<<< HEAD
=======
  imagesAdvertising: UploadFiles[] = [];
  imagesOther: UploadFiles[] = [];
  imagesMakingOf: UploadFiles[] = [];
  closeResult = '';
  imagePopin = new UploadFiles();
  imagesPopin: UploadFiles[] = [];
  host: string;
  hasImages: boolean;
  hasImagesClip: boolean;
  hasImagesAdvertising: boolean;
  hasImagesMakingOf: boolean;
  hasImagesOther: boolean;
>>>>>>> fbfce27... Modifications suite aux retours de Julien.

  constructor(private projetService: ProjetService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {  }

  ngOnInit(): void {

    this.projetService.getImagesVideos().subscribe({
      next: (images) => {

<<<<<<< HEAD
        this.images = images;
=======
        this.images = images.filter(image => 1 === image.idSousCategorie);
        this.hasImages = this.images.length >= 1;
        this.imagesClip = images.filter(imageClip => 2 === imageClip.idSousCategorie);
        this.hasImagesClip = this.imagesClip.length >= 1;
        this.imagesAdvertising = images.filter(imageAdvertising => 3 === imageAdvertising.idSousCategorie);
        this.hasImagesAdvertising = this.imagesAdvertising.length >= 1;
        this.imagesMakingOf = images.filter(imageMakingOf => 4 === imageMakingOf.idSousCategorie);
        this.hasImagesMakingOf = this.imagesMakingOf.length >= 1;
        this.imagesOther = images.filter(imageOther => 5 === imageOther.idSousCategorie);
        this.hasImagesOther = this.imagesOther.length >= 1;
>>>>>>> fbfce27... Modifications suite aux retours de Julien.
      },
      error: (err) => {
        if (err.error.status === 404) {
          console.log("Pas de fichiers trouvés");
        }
    }});
  }

  clickVideo(videoUrl : string){
    // window.postMessage({
    //   urlVideo: videoUrl
    // }, 'http://localhost:4200/');
    this.router.navigate(['../videoproject', {videoUrl : videoUrl}], { relativeTo: this.route });

  }
}



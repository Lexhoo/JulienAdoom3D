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
  imagesClip: UploadFiles[] = [];
  images: UploadFiles[] = [];

  constructor(private projetService: ProjetService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {  }

  ngOnInit(): void {

    this.projetService.getImagesVideos().subscribe({
      next: (images) => {

        this.images = images.filter(image => 1 === image.idSousCategorie);
        this.imagesClip = images.filter(imageClip => 2 === imageClip.idSousCategorie);
      },
      error: (err) => {
        this.router.navigate(['error']);

    }});
  }

  clickVideo(videoUrl : string){
    // window.postMessage({
    //   urlVideo: videoUrl
    // }, 'http://localhost:4200/');
    this.router.navigate(['../videoproject', {videoUrl : videoUrl}], { relativeTo: this.route });

  }
}



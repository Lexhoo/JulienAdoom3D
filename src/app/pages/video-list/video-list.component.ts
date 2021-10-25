import { ViewportScroller } from '@angular/common';
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
  imagesAdvertising: UploadFiles[] = [];
  imagesOther: UploadFiles[] = [];
  imagesMakingOf: UploadFiles[] = [];

  constructor(private projetService: ProjetService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, private viewportScroller: ViewportScroller) {  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {


    this.projetService.getImagesVideos().subscribe({
      next: (images) => {

        this.images = images.filter(image => 1 === image.idSousCategorie);
        this.imagesClip = images.filter(imageClip => 2 === imageClip.idSousCategorie);
        this.imagesAdvertising = images.filter(imageAdvertising => 3 === imageAdvertising.idSousCategorie);
        this.imagesMakingOf = images.filter(imageMakingOf => 4 === imageMakingOf.idSousCategorie);
        this.imagesOther = images.filter(imageOther => 5 === imageOther.idSousCategorie);
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



import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFiles } from 'src/app/models/upload-files';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-making-of',
  templateUrl: './making-of.component.html',
  styleUrls: ['./making-of.component.scss']
})
export class MakingOfComponent implements OnInit {

  images: UploadFiles[] = [];

  constructor(private projetService: ProjetService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, private viewportScroller: ViewportScroller) {  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {


    this.projetService.getImagesVideos().subscribe({
      next: (images) => {

        this.images = images;

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

import { ViewportScroller } from '@angular/common';
import { Component, Host, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFiles } from 'src/app/models/upload-files';
import { ProjetService } from '../../services/projet.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  closeResult = '';
  imagePopin = new UploadFiles();
  imagesPopin: UploadFiles[] = [];
  host: string;
  hasImages: boolean;
  hasImagesClip: boolean;
  hasImagesAdvertising: boolean;
  hasImagesMakingOf: boolean;
  hasImagesOther: boolean;

  constructor(private modalService: NgbModal, private projetService: ProjetService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, private viewportScroller: ViewportScroller) {  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {

    this.projetService.getImagesVideos().subscribe({
      next: (images) => {

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
      },
      error: (err) => {
        this.router.navigate(['error']);

    }});
  }

  clickVideo(videoUrl : string){
    // window.postMessage({
    //   urlVideo: "je suis le message"
    // }, '*');
    this.router.navigate(['../videoproject', {videoUrl : videoUrl}], { relativeTo: this.route });
    this.modalService.dismissAll('play video');

  }

  open(content, image: UploadFiles) {
    this.projetService.getImagesByProjet(image.idProjet).subscribe({
      next: (images) => {
        this.imagesPopin = images;
        this.imagePopin = image;
        this.openPopin(content);

      },
      error: (err) => {
        this.router.navigate(['error']);
      }
    });
  }

  private openPopin(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult =
            `Dismissed ${this.getDismissReason(reason)}`;
          this.imagePopin = null;
        });
  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      this.imagePopin = null;
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.imagePopin = null;
      return 'by clicking on a backdrop';
    } else {
      this.imagePopin = null;
      return `with: ${reason}`;
    }
  }

  goBack() {
    window.history.back();
  }
}





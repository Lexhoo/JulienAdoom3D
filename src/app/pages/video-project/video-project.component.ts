import { Component, HostListener, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-project',
  templateUrl: './video-project.component.html',
  styleUrls: ['./video-project.component.scss']
})
export class VideoProjectComponent implements OnInit {

  urlVideo: any;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.changeIframe(params.videoUrl);
    });




  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}

changeIframe(url) {
  this.urlVideo = this.getSafeUrl(url);
}
//   @HostListener('window:message', ['$event'])
//   getVideoUrl(event) {
// console.log('message reçu 7/7', event.data);

//   }

}

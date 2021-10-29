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
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    // window.addEventListener("message", (event) => {
    //   if (event.origin !== "http://example.org:8080")
    //     return;

    //   // ...
    // }, false);
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.changeIframe(params.videoUrl);
    });




  }

  goBack() {
    window.history.back();
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
// this.urlVideo = this.getSafeUrl(event.data.urlVideo);

//   }

}

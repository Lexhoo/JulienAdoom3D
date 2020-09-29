import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent  {
video:any;
btn: any;


    // Pause and play the video, and change the button text
    myFunction() {
        if (this.video.paused) {
            this.video.play();
            this.btn.innerHTML = "Pause";
        } else {
            this.video.pause();
            this.btn.innerHTML = "Play";
        }
    }
}

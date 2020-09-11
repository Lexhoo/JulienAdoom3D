import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;

  toggleVideo() {
    this.videoplayer.nativeElement.play();

  }

  stopVideo() {
    // this.videoplayer.nativeElement.close();
  }

  fantome(){
    console.log('je suis un fantome');
  }

}



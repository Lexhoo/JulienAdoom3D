import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
title = "Video List";
someItem = "<h1> Wassup bb</h1>"
videoList = [
  {
    name: "Item 1",
    slug: "item-1",
    embed: `BLxMt8OJ0P8`,
  },
  {
    name: "Item 2",
    slug: "item-3",
    embed: `BLxMt8OJ0P8`,

  },
  {
    name: "Item 3",
    slug: "item-3",
    embed: null,

  }
]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getEmbedUrl(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https:/www.youtube.com/embed/' + item.embed + '?ecver=2')
  }
}

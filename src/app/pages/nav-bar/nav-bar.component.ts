import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome() {
    document.getElementById("/../home").scrollIntoView({behavior:"smooth"});
  }

  toMosaique() {
    document.getElementById("/../mosaique").scrollIntoView({behavior:"smooth"});
  }
}

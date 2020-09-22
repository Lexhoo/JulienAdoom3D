import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import Player from '@vimeo/player';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const player = new Player('handstick', {
      id: 19231868,
      width: 640
  });



      //  https://vimeo.com/293402906
  }


}



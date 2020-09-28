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


//     var player=document.getElementById('player');

//     var elem = document.getElementById("player");
// if (elem.requestFullscreen) {
//   elem.requestFullscreen();
// }


  //   const player = new Player('handstick', {
  //     id: 19231868,
  //     width: 640
  // });


        // require(['https://player.vimeo.com/api/player.js'], function(Player) {
        //     var iframe = document.querySelector('iframe');
        //     var player = new Player(iframe);

        //     player.on('play', function() {
        //         console.log('played the video!');
        //     });
        // });

        // player.getFullscreen().then(function(fullscreen) {
        //     // fullscreen = whether fullscreen is turned on or off
        // }).catch(function(error) {
        //     // an error occurred
        // });



      //  https://vimeo.com/293402906
  }


}



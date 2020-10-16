import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { UploadFiles } from '../models/upload-files';
import { ProjetService } from '../services/projet.service';

declare var $:any;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {






    ngOnInit(){
      $(function() {
        $('#vidBox').VideoPopUp({

          // trigger element
          opener: "trigger",

          // video ID
          idvideo: "example",

          // default: #000000
          backgroundColor: "#17212a"

        });
      })
    }}

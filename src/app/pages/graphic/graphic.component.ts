import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { UploadFiles } from 'src/app/models/upload-files';
import { ProjetService } from 'src/app/services/projet.service';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  imgCat: UploadFiles[] = [];
  idCategorie: number;
  messageErreur: string;
  isErreur= false;
  slideIndex = 0;
  numbImages : number;


  constructor(private uploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

   this.uploadImageService.getImagesByIdCategorie(2).subscribe({
     next: (imgCat) => {
       this.imgCat = imgCat;
     },
     error: (err) => {
      if (err.error.status === 404) {
        console.log("Pas de fichiers trouvés");
      }
     }});
  }
  }





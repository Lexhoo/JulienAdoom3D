import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFiles } from 'src/app/models/upload-files';
import { ProjetService } from 'src/app/services/projet.service';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  images: UploadFiles[] = [];
  idProjet: number;
  messageErreur: string;
  isErreur= false;
  slideIndex = 0;
  numbImages : number;

  constructor(private projetService: ProjetService, private uploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

   /**
     * Récupération d'une liste d'images. Une image random par projet
     */
    this.uploadImageService.getAll().subscribe({
      next: (images) => {

      this.images = images;
    },
    error: (err) => {
      if (err.error.status === 404) {
        console.log("Pas de fichiers trouvés");
      }
    }});
  }

  }



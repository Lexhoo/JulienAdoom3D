import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFiles } from 'src/app/models/upload-files';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  images: UploadFiles[] = [];

  constructor(private uploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.uploadImageService.getImagesByCategorie().subscribe({
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



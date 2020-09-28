import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from '../../services/upload-image.service';
import { ProjetService } from 'src/app/services/projet.service';
import { UploadFiles } from 'src/app/models/upload-files';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit {

  images: UploadFiles[] = [];

  constructor(private projetService: ProjetService, private uploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) {  }
  projetImage = null;

  ngOnInit(): void {

    this.uploadImageService.getAll().subscribe({
      next: (images) => {
      this.images = images;
    },
    error: (err) => {
      if (err.error.status === 404) {
        console.log("Pas de fichiers trouvés");
      }
      console.log("err", err);
    }});
  }
}

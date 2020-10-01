import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from 'src/app/services/upload-image.service';
import { UploadFiles } from '../../models/upload-files';

@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.component.html',
  styleUrls: ['./categorie-page.component.scss']
})
export class CategoriePageComponent implements OnInit {

  imagesCategorie: UploadFiles[] = [];


  constructor(private uploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categorie = params.categorie;
      this.recupererImagesParCategorie(categorie);
    });
     }

  private recupererImagesParCategorie(categorie: string) {
    this.uploadImageService.getImagesByCategorie().subscribe({
      next: (imagesCategorie) => {
        this.imagesCategorie = imagesCategorie;
      },
      error: (err) => {
        if (err.error.status === 404) {
          console.log("Catégorie non trouvée");
        }
      }
    });
    this.route.queryParams.subscribe(params => {
      this.recupererImagesParCategorie = params['categorie'];
    });

  }
}

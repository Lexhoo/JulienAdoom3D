import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from 'src/app/services/upload-image.service';
import { UploadFiles } from '../../models/upload-files';
import { slideInAnimation } from '../../route-animation';
import { Lightbox } from 'ngx-lightbox';
import { ProjetService } from '../../services/projet.service';

@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.component.html',
  styleUrls: ['./categorie-page.component.scss'],
  animations: [ slideInAnimation ]

})
export class CategoriePageComponent implements OnInit {
  imgCat: UploadFiles[] = [];
  imagesCategorie: UploadFiles[] = [];
  titre: string;


  constructor(private projetService: ProjetService, private uploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.titre = params.titre;
      this.projetService.getImagesCategorieByProjet(+params.id).subscribe({
        next: (imgCat) => {
          this.imgCat = imgCat;
        },
        error: (err) => {
         if (err.error.status === 404) {
           console.log("Pas de fichiers trouvés");
         }
        }});
    });
  }

}

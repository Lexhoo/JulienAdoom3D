import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadFiles } from 'src/app/models/upload-files';



@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  images: UploadFiles[] = [];
   idProjet: number;
   messageErreur: string;
   isErreur= false;
   slideIndex = 0;
numbImages : number;

  constructor(private router: Router, private projetService: ProjetService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.idProjet = params.idProjet;
      this.recupererImagesParProjet(+params.idProjet);

    });

  }

//

  private recupererImagesParProjet(idProjet: number) {
    this.projetService.getImagesByProjet(idProjet).subscribe({
      next: (images) => {
        this.images = images;
this.numbImages = this.images.length;
      },
      error: (err) => {
        if (err.error.status === 404) {
          this.isErreur = true;
          this.messageErreur = "une erreur est survenue 404";
          console.log("Pas de fichiers trouvés");
        }
        else {
          //une page d'erreur ou un message d'erreur
          this.isErreur = true;
          this.messageErreur = "une erreur est survenue";
        }
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from '../../services/upload-image.service';
import { UploadFilesComponent } from '../../models/upload-files/upload-files.component';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit {

  images: UploadFilesComponent[] = [];

  constructor(private UploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.UploadImageService.getAll().subscribe(images => {
      this.images = images
    })
  }

}

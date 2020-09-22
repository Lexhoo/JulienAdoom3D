import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from '../../services/upload-image.service';
import { UploadFilesComponent } from '../../models/upload-files/upload-files.component';


@Component({
  selector: 'app-image-up',
  templateUrl: './image-up.component.html',
  styleUrls: ['./image-up.component.scss']
})
export class ImageUpComponent implements OnInit {

images: UploadFilesComponent[] = [];

  constructor(private UploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.UploadImageService.getAll().subscribe(images => {
      this.images = images
    })
  }

}

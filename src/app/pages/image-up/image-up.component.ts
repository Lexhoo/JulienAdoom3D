import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from '../../services/upload-image.service';
import { UploadFiles } from 'src/app/models/upload-files';


@Component({
  selector: 'app-image-up',
  templateUrl: './image-up.component.html',
  styleUrls: ['./image-up.component.scss']
})
export class ImageUpComponent implements OnInit {

images: UploadFiles[] = [];

  constructor(private UploadImageService: UploadImageService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.UploadImageService.getAll().subscribe(images => {
      this.images = images
    })
  }

}

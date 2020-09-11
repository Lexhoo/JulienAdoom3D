import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.scss']
})
export class MosaiqueComponent implements OnInit {
title = 'mosaique';
public list = [];


 public ngOnInit() {
   this.list = [
     { rows : 1, cols: 1, data: 1},
     {rows : 1, cols: 1, data: 2},
     {rows : 2, cols: 2, data: 3},
     {rows : 1, cols: 1, data: 4},

     {rows : 1, cols: 2, data: 5},
     {rows : 1, cols: 2, data: 6},
     {rows : 2, cols: 1, data: 7},
     {rows : 1, cols: 2, data: 8},





   ]
 }

}

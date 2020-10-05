import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInAnimation } from '../../route-animation';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [ slideInAnimation ]
})
export class NavBarComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }





}

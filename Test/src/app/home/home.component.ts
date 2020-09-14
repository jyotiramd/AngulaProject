import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  images = [
    {img: "../assets/images/5.jpg"},
    {img: "../assets/images/6.jpg"},
    {img: "../assets/images/7.jpg"},
    {img: "../assets/images/8.jpg"},
  ]

  slideConfig = {
    "slidestToShow" : 1,
    "slidesToScroll" : 1,
    "dots" : true,
    "infinite" : true

  };

  constructor() { }

  ngOnInit(): void {
  }

}

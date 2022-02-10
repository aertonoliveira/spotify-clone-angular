import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: any;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    navSpeed: 70,
    autoHeight: true,
    autoWidth: true,
    stagePadding: 10,
    responsive: {
      0: { items: 2 },
      600: { items: 6 },
      1000: { items: 7 }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

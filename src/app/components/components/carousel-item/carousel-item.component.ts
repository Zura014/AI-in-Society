import { Component, Input } from '@angular/core';
import { CarouselC } from './carouselTemplate/Carousel';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css'
})
export class CarouselItemComponent {
  
  @Input() aiInfo: CarouselC = {
    topic: undefined,
    info: undefined,
    imageUrl: undefined,
    logoUrl: undefined,
  };

  isHiddenCApplied = false;

  applyHClass() {
    this.isHiddenCApplied = !this.isHiddenCApplied;
  }
}

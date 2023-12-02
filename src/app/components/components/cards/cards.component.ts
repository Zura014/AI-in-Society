import { Component, Input } from '@angular/core';
import { Card } from './cardTemplate/Card';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() card: Card = {
    topic: undefined,
    info: undefined
  };

  isHiddenCApplied = false;

  applyHClass() {
    this.isHiddenCApplied = !this.isHiddenCApplied;
  }
}
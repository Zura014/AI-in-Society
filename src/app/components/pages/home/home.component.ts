import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isClickedModal: boolean = true;
  isClickedModal2: boolean = true;

  toggleModal(){
    this.isClickedModal =!this.isClickedModal;
  }
  toggleModal2(){
    this.isClickedModal2 =!this.isClickedModal2;
  }
}

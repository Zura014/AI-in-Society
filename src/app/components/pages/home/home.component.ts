import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  

////////////////////////////////////////////////////////////////
  //modal reciever/emitter variables

  isHiddenCApplied = false;

  applyHClass(){
    this.isHiddenCApplied = !this.isHiddenCApplied;
  }
////////////////////////////////////////////////////////////////


}

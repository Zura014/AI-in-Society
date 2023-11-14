import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClicked: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  toggle() {
    this.isClicked = !this.isClicked;
  }
}

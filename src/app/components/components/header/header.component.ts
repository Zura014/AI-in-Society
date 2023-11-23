import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClickedBM: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  toggleBM() {
    this.isClickedBM = !this.isClickedBM;
  }
}

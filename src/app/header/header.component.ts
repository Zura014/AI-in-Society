import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  newClass: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
    
  } 
  classChange(newClass: boolean): void{
    if(newClass == false){
      newClass=true;
    }else{
      newClass=false;
    }
    
  }

}

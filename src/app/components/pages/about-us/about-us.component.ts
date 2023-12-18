import { Component, Input } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  avtorebi: string[] = [
    'ნიკა ბუკია',
    'ნიკოლოზ ფირანაშვილი',
    'გიორგი დევიძე',
    'მათე კუდაშვილი',
    'ილია მიქიაშვილი',
    'ზურაბ გაგნიძე',
    'გუგა მუჩიაშვილი'
  ];

  ngOnInit(): void {
    initFlowbite();
    };
  
}

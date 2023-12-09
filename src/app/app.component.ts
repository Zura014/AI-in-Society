import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ai-in-society';
  authors: string[] = [
    'ნიკა ბუკია',
    'ნიკოლოზ ფირანაშვილი',
    'გიორგი დევიძე',
    'მათე კუდაშვილი',
    'მიქიაშვილი ილია',
    'ზურაბ გაგნიძე',
    'გუგა მუჩიაშვილი'
  ];

  ngOnInit(): void {
  initFlowbite();
  };
}

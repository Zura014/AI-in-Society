import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}

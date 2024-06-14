import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipes-demo',
  standalone: true,
  imports: [DatePipe,UpperCasePipe],
  templateUrl: './date-pipes-demo.component.html',
  styleUrl: './date-pipes-demo.component.css'
})
export class DatePipesDemoComponent {
  today :Date = new Date();
  date1: Date = new Date("2019-01-16");
  // here we are assigning the yy, mm ddmhhmmin,sec, millisecs
  // note here, months number starts fro 0 -> January
  date2:Date = new Date (2018,0,5,17,23,42,11);
}

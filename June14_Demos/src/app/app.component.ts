import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipesDemoComponent } from './date-pipes-demo/date-pipes-demo.component';
import { StringPipeDemoComponent } from './string-pipe-demo/string-pipe-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipesDemoComponent,StringPipeDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'June14_Demos';
}

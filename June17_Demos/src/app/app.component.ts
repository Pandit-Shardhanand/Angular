import { CurrencyPipe, DecimalPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ReverseStringPipe } from './reverse-string.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,DecimalPipe,CurrencyPipe,FormsModule,ReverseStringPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'June17_Demos';
  message:string = "Hello from Angular";
  amount:number =17.689357;
}

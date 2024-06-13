import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-digit-in-word',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './digit-in-word.component.html',
  styleUrl: './digit-in-word.component.css'
})
export class DigitInWordComponent {
  digit:number=0;

}

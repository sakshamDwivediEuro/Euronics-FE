import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'euro-loader',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  constructor() {}
}

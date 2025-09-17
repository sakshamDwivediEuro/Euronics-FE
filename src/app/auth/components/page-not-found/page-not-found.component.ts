import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';

@Component({
  selector: 'euro-page-not-found',
  imports: [SHARED_IMPORTS],
  standalone: true,
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}

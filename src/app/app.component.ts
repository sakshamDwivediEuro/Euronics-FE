import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CommonService } from './core/services/common.service';

@Component({
  selector: 'euro-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
})
export class AppComponent {
  protected readonly title = 'Euronics-FE';

  constructor(public commonService: CommonService) {}
}

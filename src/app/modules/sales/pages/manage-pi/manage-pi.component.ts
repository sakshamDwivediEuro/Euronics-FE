import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-manage-pi',
  imports: [SHARED_IMPORTS, MatSlideToggleModule],
  standalone: true,
  templateUrl: './manage-pi.component.html',
  styleUrl: './manage-pi.component.scss',
})
export class ManagePiComponent {
  toggleChecked: boolean = true;
}

import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonConfig } from '../../../../core/models/dynamics.model';

@Component({
  selector: 'euro-manage-pi',
  imports: [SHARED_IMPORTS, MatSlideToggleModule, ButtonComponent],
  standalone: true,
  templateUrl: './manage-pi.component.html',
  styleUrl: './manage-pi.component.scss',
})
export class ManagePiComponent {
  toggleChecked: boolean = true;
  onsave() {
    console.log('clicked');
  }
  myButtonConfig: ButtonConfig = {
    text: 'Primary euro',
    type: 'submit',
    disabled: false,
    icon: 'bi bi-upload',
    iconClass: 'ms-2',
    class: 'btn-md btn-rounded btn-shadow',
  };
}

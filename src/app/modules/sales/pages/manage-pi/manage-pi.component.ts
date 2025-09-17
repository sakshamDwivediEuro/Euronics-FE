import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonConfig } from '../../../../core/models/dynamics.model';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'euro-manage-pi',
  imports: [SHARED_IMPORTS, MatSlideToggleModule, ButtonComponent],
  standalone: true,
  templateUrl: './manage-pi.component.html',
  styleUrl: './manage-pi.component.scss',
})
export class ManagePiComponent {
  toggleChecked: boolean = false;
  myButtonConfig!: ButtonConfig;

  constructor(private readonly commonService: CommonService) {
    this.myButtonConfig = {
      text: 'Primary euro',
      type: 'submit',
      disabled: false,
      icon: 'bi bi-upload',
      iconClass: 'ms-2',
      // class: 'btn btn-warning btn-md btn-rounded btn-shadow',
    };
  }

  onsave() {
    console.log('clicked');
  }

  toggleTheme(event: any) {
    this.commonService.darkTheme = event?.checked;
  }
}

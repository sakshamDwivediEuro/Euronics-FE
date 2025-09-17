import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RightPaneComponent } from '../../layout/right-pane/right-pane.component';
import { LeftPaneComponent } from '../../layout/left-pane/left-pane.component';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CommonService } from '../../core/services/common.service';
import { SideBarList } from '../../core/models/common.model';

@Component({
  selector: 'euro-sales',
  standalone: true,
  imports: [LeftPaneComponent, RightPaneComponent, SHARED_IMPORTS],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent {
  isLeftCollapsed = false;
  isRightCollapsed = false;

  leftTabs: SideBarList[] = [];
  rightTabs: SideBarList[] = [];

  constructor(private router: Router, private readonly commonService: CommonService) {
    this.leftTabs = (commonService.applicationUiData?.['sales']?.['user'] as any)['leftList'];
    this.rightTabs = (commonService.applicationUiData?.['sales']?.['user'] as any)['rightList'];
  }

  onLeftTabSelected(tab: SideBarList) {
    this.router.navigate(['/sales', '']);
  }

  onRightTabSelected(tab: SideBarList) {
    this.router.navigate(['/sales', '']);
  }

  toggleLeftPane(collapsed: any) {
    this.isLeftCollapsed = collapsed;
  }

  toggleRightPane(collapsed: any) {
    this.isRightCollapsed = collapsed;
  }
}

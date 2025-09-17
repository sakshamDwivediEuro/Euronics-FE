import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { SideBarList } from '../../core/models/common.model';

@Component({
  selector: 'euro-right-pane',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.scss'],
})
export class RightPaneComponent {
  @Input() tabs: SideBarList[] = [];
  @Input() collapsed = false;
  @Output() tabSelected = new EventEmitter<SideBarList>();
  @Output() collapseToggle = new EventEmitter<boolean>();

  /** Stores open/close state of accordions by key/label */
  expanded: Record<string, boolean> = {};

  selectTab(tab: SideBarList) {
    if (tab.type === 'button') {
      this.tabSelected.emit(tab);
    }
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.collapseToggle.emit(this.collapsed);
  }

  toggleAccordion(tab: SideBarList) {
    const key = tab.key ?? tab.label;
    this.expanded[key] = !this.expanded[key];
  }

  isExpanded(tab: SideBarList): boolean {
    const key = tab.key ?? tab.label;
    return !!this.expanded[key];
  }
}

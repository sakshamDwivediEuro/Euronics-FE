import { Injectable } from '@angular/core';
import { ApplicationUiData, CrmRoles, Crms } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _isLoading: boolean = false;
  private _currentCRM: Crms | null = null;
  private _currentRole: CrmRoles | null = null;
  private _applicationUiData: ApplicationUiData = {
    sales: {
      roles: true,
      user: {
        leftList: [
          { label: 'In Progress', key: 'IN_PROGRESS', type: 'button' },
          { label: 'Projects', key: 'PROJECTS', type: 'button' },
          { label: 'Payments', key: 'PAYMENTS', type: 'button' },
          {
            label: 'Enter BOQ',
            type: 'nested',
            subList: [
              { label: 'Enter BOQ', key: 'ENTER_BOQ', type: 'button' },
              { label: 'All BOQ', key: 'ALL_BOQ', type: 'button' },
            ],
          },
        ],
        rightList: [
          { label: 'Quotation', key: 'QUOTATION', type: 'button' },
          { label: 'PI', key: 'PI', type: 'button' },
        ],
      },
    },
    warranty: {
      roles: false,
    },
  };

  constructor() {}

  /**
   * Method to show & hide the loader
   */
  showLoader() {
    this._isLoading = true;
  }

  hideLoader() {
    this._isLoading = false;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  /**
   * Method to set and get the current CRM & it's role
   */
  set currentCRM(crm: Crms) {
    this._currentCRM = crm;
  }

  get currentCRM(): Crms | null {
    return this._currentCRM;
  }

  set currentRole(role: CrmRoles | null) {
    this._currentRole = role;
  }

  get currentRole(): CrmRoles | null {
    return this._currentRole;
  }

  /**
   * Method to set and get the current CRM & it's role
   */
  get applicationUiData(): ApplicationUiData {
    return this._applicationUiData;
  }

  /**
   * Method to set and get the current CRM & it's role
   */
  set darkTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}

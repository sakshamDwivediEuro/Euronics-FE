import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from '../../../core/services/common.service';
import { CrmRoles, Crms } from '../../../core/constants/common.constant';

@Injectable({ providedIn: 'root' })
export class SalesDefaultRedirectGuard implements CanActivate {
  sales!: string;

  constructor(
    private router: Router,
    private readonly commonService: CommonService
  ) {
    this.sales = Crms.SALES;
  }

  canActivate(): boolean {
    // your condition
    const currenRole = this.commonService.currentRole; //admin

    if (currenRole === CrmRoles.ADMIN) {
      this.router.navigate([`${this.sales}/dashboard`]);
    } else {
      this.router.navigate([`${this.sales}/manage-pi`]);
    }

    return false; // prevent navigation to `''`
  }
}

import { CrmRoles, Crms } from '../constants/common.constant';

/**
 * define types like -> Crms = 'sales' | 'warrenty' | 'dispatch'
 */
export type Crms = (typeof Crms)[keyof typeof Crms];
export type CrmRoles = (typeof CrmRoles)[keyof typeof CrmRoles];

export interface SideBarList {
  label: string;
  key?: string;
  type: 'button' | 'nested';
  subList?: SideBarList[];
}

export interface SideBarsConfig {
  leftList?: SideBarList[];
  rightList?: SideBarList[];
}

export interface LayoutConfig {
  roles: boolean;
  [roleName: string]: SideBarsConfig | boolean;
}

export interface ApplicationUiData {
  [crmName: string]: LayoutConfig;
}

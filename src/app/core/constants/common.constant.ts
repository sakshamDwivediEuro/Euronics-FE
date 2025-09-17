import { SideBarList } from '../models/common.model';

export const Crms = {
  SALES: 'sales',
  WARRANTY: 'warranty',
  DISPATCH: 'dispatch',
} as const;

export const CrmRoles = {
  USER: 'user',
  ADMIN: 'admin',
  MASTER: 'master',
  SUPER_ADMIN: 'super-admin',
} as const;

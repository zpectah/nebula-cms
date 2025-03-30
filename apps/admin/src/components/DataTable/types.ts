import { ItemBase } from '@common';
import { orderKeys } from './enums';

export type Order = keyof typeof orderKeys;

export interface DataTableColumn<T extends ItemBase> {
  id: keyof T;
  numeric?: boolean;
  disablePadding?: boolean;
  label: string;
  isTitle?: boolean;
}

export interface DataTableProps<T extends ItemBase> {
  rows: T[];
  urlPrefix: string;
  isLoading?: boolean;
  columns: DataTableColumn<T>[];
}

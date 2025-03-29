import { ItemBase } from '@common';

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

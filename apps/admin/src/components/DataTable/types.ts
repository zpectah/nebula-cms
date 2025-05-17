import { ReactNode } from 'react';
import { ItemBase } from '@common';
import { orderKeys } from './enums';

export type Order = keyof typeof orderKeys;

export interface DataTableColumn<T extends ItemBase> {
  id: keyof T;
  numeric?: boolean;
  disablePadding?: boolean;
  label: string;
  isTitle?: boolean;
  isLink?: boolean;
  width?: string;
  renderValue?: (value: unknown, row: T, index: number) => ReactNode;
}

export interface DataTableProps<T extends ItemBase> {
  rows: T[];
  columns: DataTableColumn<T>[];
  urlPrefix: string;
  isLoading?: boolean;
  disableUpdatedColumn?: boolean;
  onDeleteSelected?: (selected: number[]) => void;
}

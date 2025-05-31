import { ItemBase, ItemBaseLocales } from '@common';
import { categoriesTypeKeys } from '../enums';

export type CategoriesType = keyof typeof categoriesTypeKeys;

export interface CategoriesItem extends ItemBase {
  type: CategoriesType;
}

interface CategoriesDetailLocale {
  title: string;
  description?: string;
}

export interface CategoriesDetail extends CategoriesItem, ItemBaseLocales<CategoriesDetailLocale> {
  startDate?: string;
  endDate?: string;
}

export type Categories = CategoriesItem[];

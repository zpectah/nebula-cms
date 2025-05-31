import { CategoriesDetail } from '@core';

export interface ICategoriesDetailForm extends CategoriesDetail {}

export interface INewCategoriesItem extends Omit<CategoriesDetail, 'created' | 'updated'> {}

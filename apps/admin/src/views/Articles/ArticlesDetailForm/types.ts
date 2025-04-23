import { ArticlesDetail } from '@core';

export interface IArticlesDetailForm extends ArticlesDetail {}

export interface INewArticlesItem extends Omit<ArticlesDetail, 'created' | 'updated'> {}

import { ArticlesDetail } from '@core';
import { Dayjs } from 'dayjs';

export interface IArticlesDetailForm extends Omit<ArticlesDetail, 'startDate' | 'endDate'> {
  startDate?: Dayjs;
  endDate?: Dayjs;
}

export interface INewArticlesItem extends Omit<ArticlesDetail, 'created' | 'updated'> {}

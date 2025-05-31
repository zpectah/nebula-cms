import { PagesDetail } from '@core';

export interface IPagesDetailForm extends PagesDetail {}

export interface INewPagesItem extends Omit<PagesDetail, 'created' | 'updated'> {}

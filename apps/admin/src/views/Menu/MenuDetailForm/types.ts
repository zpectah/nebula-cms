import { MenuDetail } from '@core';

export interface IMenuDetailForm extends MenuDetail {}

export interface INewMenuItem extends Omit<MenuDetail, 'created' | 'updated'> {}

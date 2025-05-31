import { TranslationsDetail } from '@core';

export interface ITranslationsDetailForm extends TranslationsDetail {}

export interface INewTranslationsItem extends Omit<TranslationsDetail, 'created' | 'updated'> {}

import { translationsTypeKeys } from '@core';

export const TranslationsDetailFormKeys = {
  type: 'type',
  name: 'name',
  label: 'label',
  active: 'active',
  deleted: 'deleted',
} as const;

export const TranslationsDetailFormDefault = {
  type: translationsTypeKeys.default,
  name: '',
  label: '',
  active: true,
  deleted: false,
};

export const TranslationsDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};

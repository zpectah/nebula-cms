import { categoriesTypeKeys } from '@core';

export const CategoriesDetailFormKeys = {
  type: 'type',
  name: 'name',
  title: 'title',
  description: 'description',
  active: 'active',
  deleted: 'deleted',
} as const;

export const CategoriesDetailFormDefault = {
  type: categoriesTypeKeys.default,
  name: '',
  title: '',
  description: '',
  active: true,
  deleted: false,
};

export const CategoriesDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};

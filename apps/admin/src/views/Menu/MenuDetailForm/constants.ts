import { menuTypeKeys } from '@core';

export const MenuDetailFormKeys = {
  type: 'type',
  name: 'name',
  active: 'active',
  deleted: 'deleted',
} as const;

export const MenuDetailFormDefault = {
  type: menuTypeKeys.default,
  name: '',
  active: true,
  deleted: false,
};

export const MenuDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};

import { usersTypeKeys } from '@core';

export const UsersDetailFormKeys = {
  type: 'type',
  name: 'name',
  active: 'active',
  deleted: 'deleted',
} as const;

export const UsersDetailFormDefault = {
  type: usersTypeKeys.default,
  name: '',
  active: true,
  deleted: false,
};

export const UsersDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};

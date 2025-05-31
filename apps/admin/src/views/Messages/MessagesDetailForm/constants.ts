import { messagesTypeKeys } from '@core';

export const MessagesDetailFormKeys = {
  type: 'type',
  name: 'name',
  active: 'active',
  deleted: 'deleted',
} as const;

export const MessagesDetailFormDefault = {
  type: messagesTypeKeys.default,
  name: '',
  active: true,
  deleted: false,
};

export const MessagesDetailFormValidations = {
  type: {},
  name: {
    minLength: 5,
  },
};

import { UsersDetail } from '@core';

export interface IUsersDetailForm extends UsersDetail {}

export interface INewUsersItem extends Omit<UsersDetail, 'created' | 'updated'> {}

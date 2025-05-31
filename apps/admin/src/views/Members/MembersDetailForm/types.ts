import { MembersDetail } from '@core';

export interface IMembersDetailForm extends MembersDetail {}

export interface INewMembersItem extends Omit<MembersDetail, 'created' | 'updated'> {}

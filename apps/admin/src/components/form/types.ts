import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormElement } from '@common';

export type FormProps = FormElement;

export interface ControlledFormProps<T extends FieldValues> {
  children: ReactNode;
  form?: UseFormReturn<T>;
  formProps?: Partial<Omit<FormElement, 'children'>>;
}

import { FieldValues, UseFormReturn } from 'react-hook-form';
import { ControlledFormProps } from './types';
import Form from './Form';
import { ControlledFormContextProvider } from './ControlledForm.context';

const ControlledForm = <T extends FieldValues>({ form, formProps, children }: ControlledFormProps<T>) => {
  if (!form) {
    throw new Error('"form" is not defined');
  }

  return (
    <ControlledFormContextProvider value={{ form: form as UseFormReturn<FieldValues> }}>
      <Form {...formProps}>{children}</Form>
    </ControlledFormContextProvider>
  );
};

export default ControlledForm;

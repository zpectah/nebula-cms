import { useMemo, cloneElement, ReactElement } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { useControlledFormContext } from './ControlledForm.context';
import FormFieldBase, { FormFieldBaseProps } from './FormFieldBase';

interface FormFieldProps extends FormFieldBaseProps {
  field: ReactElement;
  fieldId?: string;
  testId?: string;
  isDisabled?: boolean;
  fieldOptions?: RegisterOptions;
}

const FormField = (props: FormFieldProps) => {
  const {
    name,
    field,
    fieldId,
    testId,
    label,
    isRequired,
    isDisabled,
    fieldOptions,
    helperTexts = [],
    boxProps,
  } = props;

  const { form } = useControlledFormContext();

  const fieldErrorMessage = useMemo(() => form?.formState?.errors[name]?.message as string, [form?.formState, name]);

  if (!field) {
    throw new Error('Missing field element');
  }

  return (
    <FormFieldBase
      name={name}
      label={label}
      helperTexts={helperTexts}
      boxProps={boxProps}
      errorMessage={fieldErrorMessage}
      isRequired={isRequired}
    >
      {cloneElement(field, {
        ...form?.register(name, { required: isRequired, ...fieldOptions }),
        disabled: isDisabled,
        id: fieldId,
        error: !!fieldErrorMessage,
        'data-test-id': testId ?? name,
      } as object)}
    </FormFieldBase>
  );
};

export default FormField;

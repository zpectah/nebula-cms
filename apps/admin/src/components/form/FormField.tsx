import { useMemo, cloneElement, ReactElement } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { Box, Stack, BoxProps } from '@mui/material';
import { useControlledFormContext } from './ControlledForm.context';
import { FieldLabel } from './FieldLabel';
import { FieldMessage, FieldErrorMessage } from './FieldMessage';

interface FormFieldProps {
  name: string;
  field: ReactElement;
  fieldId?: string;
  testId?: string;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  fieldOptions?: RegisterOptions;
  helperTexts?: string[];
  boxProps?: Partial<BoxProps>;
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
    <Box {...boxProps}>
      {label && (
        <FieldLabel htmlFor={name}>
          {label}
          {isRequired && ' *'}
        </FieldLabel>
      )}
      <Stack>
        {cloneElement(field, {
          ...form?.register(name, { required: isRequired, ...fieldOptions }),
          disabled: isDisabled,
          id: fieldId,
          error: !!fieldErrorMessage,
          'data-test-id': testId,
        } as object)}
        <Stack direction="column">
          {fieldErrorMessage && <FieldErrorMessage>{fieldErrorMessage}</FieldErrorMessage>}
          {helperTexts?.map((text, i) => <FieldMessage key={i}>{text}</FieldMessage>)}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FormField;

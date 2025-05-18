import { Box, Stack, BoxProps } from '@mui/material';
import { WithChildren } from '@common';
import { FieldLabel } from './FieldLabel';
import { FieldMessage, FieldErrorMessage } from './FieldMessage';

export interface FormFieldBaseProps extends Partial<WithChildren> {
  name: string;
  label?: string;
  isRequired?: boolean;
  helperTexts?: string[];
  boxProps?: Partial<BoxProps>;
  errorMessage?: string;
}

const FormFieldBase = (props: FormFieldBaseProps) => {
  const { children, name, label, isRequired, helperTexts = [], boxProps, errorMessage } = props;

  return (
    <Box {...boxProps}>
      {label && (
        <FieldLabel htmlFor={name}>
          {label}
          {isRequired && ' *'}
        </FieldLabel>
      )}
      <Stack>
        {children}
        <Stack direction="column">
          {errorMessage && <FieldErrorMessage>{errorMessage}</FieldErrorMessage>}
          {helperTexts?.map((text, i) => (
            <FieldMessage key={i}>{text}</FieldMessage>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FormFieldBase;

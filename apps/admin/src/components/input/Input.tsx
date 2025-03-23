import { forwardRef, ReactNode } from 'react';
import merge from 'lodash.merge';
import { TextField, InputAdornment, TextFieldProps, InputAdornmentProps } from '@mui/material';

export type InputProps = { readOnly?: boolean } & Partial<TextFieldProps> & {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    inputAdornmentProps?: Partial<InputAdornmentProps>;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ readOnly, startAdornment, endAdornment, inputAdornmentProps, ...rest }, ref) => {
    const localProps = {
      input: {
        readOnly,
        startAdornment: startAdornment ? (
          <InputAdornment position="start" {...inputAdornmentProps}>
            {startAdornment}
          </InputAdornment>
        ) : undefined,
        endAdornment: endAdornment ? (
          <InputAdornment position="end" {...inputAdornmentProps}>
            {endAdornment}
          </InputAdornment>
        ) : undefined,
        sx: { fontFamily: '"JetBrains Mono Variable", monospace' },
      },
    };
    const slotProps = merge({}, localProps, { ...rest.slotProps });

    return <TextField {...rest} slotProps={slotProps} ref={ref} />;
  }
);

export default Input;

import { forwardRef } from 'react';
import Input, { InputProps } from './Input';

export type NumberProps = InputProps & {
  pattern?: string;
};

const Number = forwardRef<HTMLInputElement, NumberProps>(({ pattern = '[0-9]*', ...rest }, ref) => (
  <Input inputMode="numeric" slotProps={{ htmlInput: { pattern } }} {...rest} ref={ref} />
));

export default Number;

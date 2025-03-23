import { forwardRef } from 'react';
import Input, { InputProps } from './Input';
import LockIcon from '@mui/icons-material/Lock';

export type PasswordProps = Omit<InputProps, 'type'> & { disableIcon?: boolean };

const Password = forwardRef<HTMLInputElement, PasswordProps>(({ disableIcon, ...rest }, ref) => {
  return <Input type="password" startAdornment={!disableIcon && <LockIcon />} {...rest} ref={ref} />;
});

export default Password;

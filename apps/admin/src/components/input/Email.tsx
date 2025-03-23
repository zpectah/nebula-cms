import { forwardRef } from 'react';
import Input, { InputProps } from './Input';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export type EmailProps = Omit<InputProps, 'type'> & { disableIcon?: boolean };

const Email = forwardRef<HTMLInputElement, EmailProps>(({ disableIcon, ...rest }, ref) => {
  return <Input type="email" startAdornment={!disableIcon && <MailOutlineIcon />} {...rest} ref={ref} />;
});

export default Email;

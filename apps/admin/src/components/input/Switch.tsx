import { forwardRef } from 'react';
import { FormControlLabel, Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';

export interface SwitchProps {
  inputProps?: Partial<MuiSwitchProps>;
  name: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ inputProps, name, label, checked, onChange }, ref) => {
  return (
    <FormControlLabel
      ref={ref}
      name={name}
      checked={checked}
      onChange={(__, checked) => onChange?.(checked)}
      control={<MuiSwitch {...inputProps} />}
      label={label}
    />
  );
});

export default Switch;

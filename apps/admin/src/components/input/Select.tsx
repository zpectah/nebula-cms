import { forwardRef } from 'react';
import { Select as MuiSelect, SelectProps as MuiSelectProps, MenuItem, MenuItemProps } from '@mui/material';

export type SelectProps = {
  items?: MenuItemProps[];
  readOnly?: boolean;
} & Partial<MuiSelectProps>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ children, items = [], readOnly, ...rest }, ref) => {
  const slotProps = {
    input: { readOnly, sx: { fontFamily: '"JetBrains Mono Variable", monospace' } },
    ...rest.slotProps,
  };

  return (
    <MuiSelect {...rest} ref={ref} slotProps={slotProps}>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
      {children}
    </MuiSelect>
  );
});

export default Select;

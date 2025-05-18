import { Controller } from 'react-hook-form';
import { Box, BoxProps } from '@mui/material';
import { useControlledFormContext } from '../form';
import Switch, { SwitchProps } from './Switch';

export interface ControlledSwitchProps extends SwitchProps {
  boxProps?: Partial<BoxProps>;
}

const ControlledSwitch = ({ name, boxProps, ...rest }: ControlledSwitchProps) => {
  const { form } = useControlledFormContext();

  if (!form) {
    console.warn('Form context does not found');

    return null;
  }

  return (
    <Box {...boxProps}>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => <Switch {...field} checked={!!field.value} {...rest} />}
      />
    </Box>
  );
};

export default ControlledSwitch;

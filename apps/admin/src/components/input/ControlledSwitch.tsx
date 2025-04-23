import { Controller } from 'react-hook-form';
import { useControlledFormContext } from '../form/ControlledForm.context';
import Switch, { SwitchProps } from './Switch';

export interface ControlledSwitchProps extends SwitchProps {}

const ControlledSwitch = ({ name, ...rest }: ControlledSwitchProps) => {
  const { form } = useControlledFormContext();

  if (!form) {
    console.warn('Form context does not found');

    return null;
  }

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => <Switch {...field} checked={!!field.value} {...rest} />}
    />
  );
};

export default ControlledSwitch;

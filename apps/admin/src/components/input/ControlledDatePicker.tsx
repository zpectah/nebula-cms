import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { FormFieldBase, FormFieldBaseProps } from '../form';
import DatePicker, { DatePickerProps } from './DatePicker';
import { useControlledFormContext } from '../form';

export interface ControlledDatePickerProps extends DatePickerProps {
  name: string;
  label?: string;
  fieldProps?: Partial<FormFieldBaseProps>;
}

const ControlledDatePicker = ({ name, label, fieldProps, ...rest }: ControlledDatePickerProps) => {
  const { form } = useControlledFormContext();

  const fieldErrorMessage = useMemo(() => form?.formState?.errors[name]?.message as string, [form?.formState, name]);

  return (
    <Controller
      name={name}
      control={form?.control}
      rules={{ required: fieldProps?.isRequired }}
      defaultValue={null}
      render={({ field }) => (
        <FormFieldBase name={name} label={label} errorMessage={fieldErrorMessage} {...fieldProps}>
          <DatePicker
            value={field.value}
            onChange={(value) => field.onChange(value)}
            ref={field.ref}
            slotProps={{ textField: { error: !!fieldErrorMessage } }}
            {...rest}
          />
        </FormFieldBase>
      )}
    />
  );
};

export default ControlledDatePicker;

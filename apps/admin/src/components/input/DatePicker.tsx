import { forwardRef } from 'react';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';

export type DatePickerProps = MuiDatePickerProps<never> & {};

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>((props, ref) => (
  <MuiDatePicker {...props} ref={ref} />
));

export default DatePicker;

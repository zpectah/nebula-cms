import { FormProps } from './types';

const Form = ({ children, ...rest }: FormProps) => (
  <form noValidate autoComplete="off" {...rest}>
    {children}
  </form>
);

export default Form;

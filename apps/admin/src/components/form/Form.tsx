import { FormProps } from './types';

const Form = ({ children, ...rest }: FormProps) => <form {...rest}>{children}</form>;

export default Form;

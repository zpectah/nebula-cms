import { Stack, Button } from '@mui/material';
import { ControlledForm, FormField, Email, Password } from '../../../components';
import { ILoginForm } from './types';
import { LoginFormKeys, LoginFormDefaults, LoginFormValidations } from './constants';
import { useLoginForm } from './useLoginForm';

const LoginForm = () => {
  const { form, onSubmit } = useLoginForm();

  const {
    formState: { isValid },
    reset,
  } = form;

  return (
    <ControlledForm<ILoginForm> form={form} formProps={{ onSubmit }}>
      <Stack gap={2}>
        <FormField
          name={LoginFormKeys.email}
          label={'email'}
          field={
            <Email
              defaultValue={LoginFormDefaults.email}
              slotProps={{ htmlInput: { ...LoginFormValidations.email } }}
              fullWidth
            />
          }
          isRequired
        />
        <FormField
          name={LoginFormKeys.password}
          label={'password'}
          field={
            <Password
              defaultValue={LoginFormDefaults.password}
              slotProps={{ htmlInput: { ...LoginFormValidations.password } }}
              fullWidth
            />
          }
          isRequired
        />
        <Stack direction="row" gap={2}>
          <Button type="submit" disabled={!isValid}>
            submit
          </Button>
          <Button onClick={() => reset()} disabled={!isValid}>
            reset
          </Button>
          <Button>password recovery</Button>
        </Stack>
      </Stack>
    </ControlledForm>
  );
};

export default LoginForm;

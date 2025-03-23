import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { IUsersDetailForm } from './types';
import { useUsersDetailForm } from './useUsersDetailForm';

const UsersDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useUsersDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New user' : 'User title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<IUsersDetailForm>
      root={routes.users.path}
      id={id}
      formProps={{
        form,
        formProps: { onSubmit },
      }}
      title={drawerTitle}
    >
      <div>
        <input type="text" {...form.register('type')} />
        <input type="text" {...form.register('name')} />
      </div>
    </DetailDrawerForm>
  );
};

export default UsersDetailForm;

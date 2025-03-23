import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { IMembersDetailForm } from './types';
import { useMembersDetailForm } from './useMembersDetailForm';

const MembersDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useMembersDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New member' : 'Member title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<IMembersDetailForm>
      root={routes.members.path}
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

export default MembersDetailForm;

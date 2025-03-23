import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { IMessagesDetailForm } from './types';
import { useMessagesDetailForm } from './useMessagesDetailForm';

const MessagesDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useMessagesDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return 'Article title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<IMessagesDetailForm>
      root={routes.messages.path}
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

export default MessagesDetailForm;

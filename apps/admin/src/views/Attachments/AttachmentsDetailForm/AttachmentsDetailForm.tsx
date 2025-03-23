import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { IAttachmentsDetailForm } from './types';
import { useAttachmentsDetailForm } from './useAttachmentsDetailForm';

const AttachmentsDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useAttachmentsDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New attachment' : 'Attachment title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<IAttachmentsDetailForm>
      root={routes.attachments.path}
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

export default AttachmentsDetailForm;

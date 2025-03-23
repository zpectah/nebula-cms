import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { IPagesDetailForm } from './types';
import { usePagesDetailForm } from './usePagesDetailForm';

const PagesDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = usePagesDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New page' : 'Page title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<IPagesDetailForm>
      root={routes.pages.path}
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

export default PagesDetailForm;

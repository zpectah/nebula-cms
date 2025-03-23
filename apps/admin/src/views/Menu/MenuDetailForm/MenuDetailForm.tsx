import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { IMenuDetailForm } from './types';
import { useMenuDetailForm } from './useMenuDetailForm';

const MenuDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useMenuDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New menu' : 'Menu title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<IMenuDetailForm>
      root={routes.menu.path}
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

export default MenuDetailForm;

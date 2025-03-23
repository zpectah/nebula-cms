import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { ICategoriesDetailForm } from './types';
import { useCategoriesDetailForm } from './useCategoriesDetailForm';

const CategoriesDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useCategoriesDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New category' : 'Category title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<ICategoriesDetailForm>
      root={routes.categories.path}
      id={id}
      formProps={{
        form,
        formProps: { onSubmit },
      }}
      title={drawerTitle}
    >
      <input type="text" {...form.register('type')} />
      <input type="text" {...form.register('name')} />
    </DetailDrawerForm>
  );
};

export default CategoriesDetailForm;

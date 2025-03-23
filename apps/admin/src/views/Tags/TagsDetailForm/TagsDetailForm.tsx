import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { ITagsDetailForm } from './types';
import { useTagsDetailForm } from './useTagsDetailForm';

const TagsDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useTagsDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New tag' : 'Tag title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<ITagsDetailForm>
      root={routes.tags.path}
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

export default TagsDetailForm;

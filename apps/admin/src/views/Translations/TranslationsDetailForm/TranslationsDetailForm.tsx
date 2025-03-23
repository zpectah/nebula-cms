import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config';
import { DetailDrawerForm } from '../../../components';
import { ITranslationsDetailForm } from './types';
import { useTranslationsDetailForm } from './useTranslationsDetailForm';

const TranslationsDetailForm = () => {
  const { id } = useParams();
  const { form, onSubmit } = useTranslationsDetailForm();

  const { routes } = config;

  const {
    formState: { isValid },
  } = form;

  const drawerTitle = useMemo(() => {
    return id === 'new' ? 'New translation' : 'Translation title'; // TODO
  }, [id]);

  return (
    <DetailDrawerForm<ITranslationsDetailForm>
      root={routes.translations.path}
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

export default TranslationsDetailForm;

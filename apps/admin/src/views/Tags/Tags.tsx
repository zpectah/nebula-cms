import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { TagsList } from './TagsList';
import { TagsDetailForm } from './TagsDetailForm';

const Tags = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Tags.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Tags.title')}
      action={<AddButton route={`${routes.tags.path}/new`}>{t('views:Tags.item')}</AddButton>}
    >
      <TagsList />
      <TagsDetailForm />
    </ViewLayout>
  );
};

export default Tags;

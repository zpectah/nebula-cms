import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { PagesList } from './PagesList';
import { PagesDetailForm } from './PagesDetailForm';

const Pages = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Pages.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Pages.title')}
      action={<AddButton route={`${routes.pages.path}/new`}>{t('views:Pages.item')}</AddButton>}
    >
      <PagesList />
      <PagesDetailForm />
    </ViewLayout>
  );
};

export default Pages;

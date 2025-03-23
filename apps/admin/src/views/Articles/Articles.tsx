import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { ArticlesList } from './ArticlesList';
import { ArticlesDetailForm } from './ArticlesDetailForm';

const Articles = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Articles.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Articles.title')}
      action={<AddButton route={`${routes.articles.path}/new`}>{t('views:Articles.item')}</AddButton>}
    >
      <ArticlesList />
      <ArticlesDetailForm />
    </ViewLayout>
  );
};

export default Articles;

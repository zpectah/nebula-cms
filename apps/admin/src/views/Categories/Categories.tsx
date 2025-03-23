import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { CategoriesList } from './CategoriesList';
import { CategoriesDetailForm } from './CategoriesDetailForm';

const Categories = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Categories.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Categories.title')}
      action={<AddButton route={`${routes.categories.path}/new`}>{t('views:Categories.item')}</AddButton>}
    >
      <CategoriesList />
      <CategoriesDetailForm />
    </ViewLayout>
  );
};

export default Categories;

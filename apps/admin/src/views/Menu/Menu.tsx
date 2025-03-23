import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { MenuList } from './MenuList';
import { MenuDetailForm } from './MenuDetailForm';

const Menu = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Menu.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Menu.title')}
      action={<AddButton route={`${routes.menu.path}/new`}>{t('views:Menu.item')}</AddButton>}
    >
      <MenuList />
      <MenuDetailForm />
    </ViewLayout>
  );
};

export default Menu;

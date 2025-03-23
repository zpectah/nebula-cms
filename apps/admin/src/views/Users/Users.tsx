import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { UsersList } from './UsersList';
import { UsersDetailForm } from './UsersDetailForm';

const Users = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Users.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Users.title')}
      action={<AddButton route={`${routes.users.path}/new`}>{t('views:Users.item')}</AddButton>}
    >
      <UsersList />
      <UsersDetailForm />
    </ViewLayout>
  );
};

export default Users;

import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { MembersList } from './MembersList';
import { MembersDetailForm } from './MembersDetailForm';

const Members = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Members.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Members.title')}
      action={<AddButton route={`${routes.members.path}/new`}>{t('views:Members.item')}</AddButton>}
    >
      <MembersList />
      <MembersDetailForm />
    </ViewLayout>
  );
};

export default Members;

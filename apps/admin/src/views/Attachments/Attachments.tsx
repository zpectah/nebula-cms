import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { AttachmentsList } from './AttachmentsList';
import { AttachmentsDetailForm } from './AttachmentsDetailForm';

const Attachments = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Attachments.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Attachments.title')}
      action={<AddButton route={`${routes.attachments.path}/new`}>{t('views:Attachments.item')}</AddButton>}
    >
      <AttachmentsList />
      <AttachmentsDetailForm />
    </ViewLayout>
  );
};

export default Attachments;

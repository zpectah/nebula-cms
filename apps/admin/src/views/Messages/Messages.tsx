import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { MessagesList } from './MessagesList';
import { MessagesDetailForm } from './MessagesDetailForm';

const Messages = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Messages.title'), detail: id });

  return (
    <ViewLayout pageTitle={t('views:Messages.title')}>
      <MessagesList />
      <MessagesDetailForm />
    </ViewLayout>
  );
};

export default Messages;

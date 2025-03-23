import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { ViewLayout, AddButton } from '../../components';
import { useDocumentMeta } from '../../helpers';
import { TranslationsList } from './TranslationsList';
import { TranslationsDetailForm } from './TranslationsDetailForm';

const Translations = () => {
  const { id } = useParams();
  const { t } = useTranslation(['common', 'views']);

  const { routes } = config;

  useDocumentMeta({ title: t('views:Translations.title'), detail: id });

  return (
    <ViewLayout
      pageTitle={t('views:Translations.title')}
      action={<AddButton route={`${routes.translations.path}/new`}>{t('views:Translations.item')}</AddButton>}
    >
      <TranslationsList />
      <TranslationsDetailForm />
    </ViewLayout>
  );
};

export default Translations;

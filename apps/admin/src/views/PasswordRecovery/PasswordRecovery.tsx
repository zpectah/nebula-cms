import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import config from '../../config';
import { LayoutBase } from '../../components';
import { useDocumentMeta } from '../../helpers';

const PasswordRecovery = () => {
  const { token } = useParams();
  const { t } = useTranslation(['common', 'views']);

  useDocumentMeta({ title: t('views:PasswordRecovery.title') });

  return (
    <LayoutBase>
      <Container maxWidth="md">
        ...{t('views:PasswordRecovery.title')}...PasswordRecovery...{token ? `token: ${token}` : ''}...
      </Container>
    </LayoutBase>
  );
};

export default PasswordRecovery;

import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { LayoutBase, Footer } from '../../components';
import { LoginForm } from './LoginForm';
import { useDocumentMeta } from '../../helpers';

const Login = () => {
  const { t } = useTranslation(['common', 'views']);

  useDocumentMeta({ title: t('views:Login.title') });

  return (
    <LayoutBase>
      <Container maxWidth="md">
        <div>{t('views:Login.title')}</div>
        <LoginForm />
        <Footer />
      </Container>
    </LayoutBase>
  );
};

export default Login;

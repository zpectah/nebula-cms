import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { LayoutBase } from '../../components';
import { useDocumentMeta } from '../../helpers';

interface ErrorProps {
  code: number;
}

const Error = ({ code }: ErrorProps) => {
  const { t } = useTranslation(['common', 'views']);

  useDocumentMeta({ title: t('views:Error.title') });

  return (
    <LayoutBase>
      <Container maxWidth="md">
        ...{t('views:Error.title')}Error page view {code}...
      </Container>
    </LayoutBase>
  );
};

export default Error;

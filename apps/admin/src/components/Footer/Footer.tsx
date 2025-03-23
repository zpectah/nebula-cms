import { styled } from '@mui/material';
import { version } from '../../../../../package.json';
import config from '../../config';

const Wrapper = styled('footer')(({ theme }) => ({
  width: '100%',
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey['500'],
  ...theme.typography.caption,
}));

const Footer = () => {
  const { admin } = config;

  return (
    <Wrapper id="app-footer">
      <span>
        {admin.meta.name} v{version}
      </span>
    </Wrapper>
  );
};

export default Footer;

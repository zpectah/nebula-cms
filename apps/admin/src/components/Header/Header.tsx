import { Link } from 'react-router-dom';
import { styled, Container, Stack } from '@mui/material';
import config from '../../config';
import { useSettingsQuery } from '../../hooks';
import { MainMenu } from '../navigation';
import { LocalesToggle } from '../LocalesToggle';
import { ThemeToggle } from '../ThemeToggle';
import { UserMenu } from '../UserMenu';

const Wrapper = styled('header')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#01719A',
  color: theme.palette.getContrastText('#01719A'),
}));

const WrapperInner = styled('div')(({ theme }) => ({
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Block = styled('div')({
  width: `calc(100 / 3)`,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
});

const PrimaryBlock = styled(Block)({
  justifyContent: 'flex-start',
});
const SecondaryBlock = styled(Block)({
  justifyContent: 'flex-end',
});
const TertiaryBlock = styled(Block)({
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 0,
});

const AppLogo = styled(Link)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 900,
  padding: 0,
  lineHeight: 0,
  letterSpacing: '-0.05rem',
  opacity: 0.9,
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',

  '&:hover': {
    opacity: 1,
  },
}));

const Header = () => {
  const { settingsQuery } = useSettingsQuery();

  const { routes } = config;

  const { data } = settingsQuery;

  return (
    <Wrapper id="app-header">
      <Container maxWidth={false}>
        <WrapperInner>
          <PrimaryBlock>
            <MainMenu buttonColor="inherit" />
          </PrimaryBlock>
          <TertiaryBlock>
            <AppLogo to={routes.dashboard.path}>{data?.data?.project_name}</AppLogo>
          </TertiaryBlock>
          <SecondaryBlock>
            <Stack direction="row" gap={1.5}>
              <ThemeToggle buttonColor="inherit" />
              <LocalesToggle buttonColor="inherit" />
              <UserMenu buttonColor="inherit" />
            </Stack>
          </SecondaryBlock>
        </WrapperInner>
      </Container>
    </Wrapper>
  );
};

export default Header;

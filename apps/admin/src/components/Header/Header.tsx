import { Link } from 'react-router-dom';
import { styled, Container, Stack } from '@mui/material';
import bgImage from '../../assets/bg_dust.png';
import config from '../../config';
import { useSettingsQuery } from '../../hooks';
import { MainMenu } from '../navigation';
import { LocalesToggle } from '../LocalesToggle';
import { ThemeToggle } from '../ThemeToggle';
import { UserMenu } from '../UserMenu';

const Wrapper = styled('header')(({ theme }) => ({
  width: '100%',
  borderBottom: `solid 1px ${theme.palette.divider}`,
  background: `url(${bgImage})`,
}));

const WrapperInner = styled('div')(({ theme }) => ({
  width: '100%',
  height: '59px',
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
  textTransform: 'uppercase',
  color: theme.palette.text.primary,

  '&:hover': {
    opacity: 1,
  },
}));

const Header = () => {
  const { settingsQuery } = useSettingsQuery();

  const { data } = settingsQuery;

  return (
    <Wrapper id="app-header">
      <Container maxWidth={false}>
        <WrapperInner>
          <PrimaryBlock>
            <MainMenu buttonColor="inherit" />
          </PrimaryBlock>
          <TertiaryBlock>
            <AppLogo to={config.routes.dashboard.path}>{data?.project_name}</AppLogo>
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

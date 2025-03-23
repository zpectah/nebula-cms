import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Container, CircularProgress } from '@mui/material';
import { Header } from '../Header';
import { Footer } from '../Footer';
import LayoutBase from './LayoutBase';

const Main = styled('main')({
  width: '100%',
  flex: 1,
  overflowY: 'auto',
  flexDirection: 'column',
});

const Content = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  gap: theme.spacing(4),
}));

const PreloaderWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

const PreloaderElement = () => (
  <PreloaderWrapper>
    <CircularProgress />
  </PreloaderWrapper>
);

const AppLayout = () => {
  return (
    <LayoutBase id="app-layout">
      <Header />
      <Main>
        <Container maxWidth="lg">
          <Content>
            <Suspense fallback={<PreloaderElement />}>
              <Outlet />
            </Suspense>
            <Footer />
          </Content>
        </Container>
      </Main>
    </LayoutBase>
  );
};

export default AppLayout;

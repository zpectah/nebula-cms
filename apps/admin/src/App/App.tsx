import { useAppInit } from './useAppInit';
import AppProvider from './AppProvider';
import AppRouter from './AppRouter';
import '../i18n';

const App = () => {
  const { ...appInit } = useAppInit();

  return (
    <AppProvider {...appInit}>
      <AppRouter />
    </AppProvider>
  );
};

export default App;

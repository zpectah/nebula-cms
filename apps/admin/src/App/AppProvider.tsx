import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { WithChildren } from '@common';
import { ThemeMode } from '../types';
import theme from '../styles/theme';

interface AppProviderProps extends WithChildren {
  locales: string;
  mode: ThemeMode;
}

const queryClient = new QueryClient();

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;

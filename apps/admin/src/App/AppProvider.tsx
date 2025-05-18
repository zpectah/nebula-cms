import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;

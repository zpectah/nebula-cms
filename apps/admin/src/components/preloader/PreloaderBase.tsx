import { Stack, CircularProgress } from '@mui/material';
import { WithChildren } from '@common';

interface PreloaderBaseProps extends Partial<WithChildren> {}

const PreloaderBase = ({ children }: PreloaderBaseProps) => (
  <Stack alignItems="center" justifyContent="center" direction="column" sx={{ width: '100%', height: '100%' }}>
    <CircularProgress />
    {children}
  </Stack>
);

export default PreloaderBase;
